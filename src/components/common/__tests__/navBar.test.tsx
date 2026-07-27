import { act } from 'react';
import { afterEach, describe, expect, test } from 'bun:test';
import { fireEvent, screen } from '@testing-library/react';

import { cleanup, renderWithProviders } from '../../../test-utils';
import NavBar from '../navBar';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

type ChangeListener = (event: MediaQueryListEvent) => void;

const originalMatchMedia = window.matchMedia;

const mockMatchMedia = (initialMatches: boolean) => {
  let matches = initialMatches;
  const listeners = new Set<ChangeListener>();

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: (query: string) => ({
      addEventListener: (type: string, listener: ChangeListener) => {
        if (type === 'change') {
          listeners.add(listener);
        }
      },
      matches,
      media: query,
      removeEventListener: (type: string, listener: ChangeListener) => {
        if (type === 'change') {
          listeners.delete(listener);
        }
      },
    }),
  });

  return {
    listenerCount: () => listeners.size,
    setMatches: (nextMatches: boolean) => {
      matches = nextMatches;
      const event = { matches } as MediaQueryListEvent;
      listeners.forEach((listener) => listener(event));
    },
  };
};

afterEach(() => {
  cleanup();
  document.documentElement.removeAttribute('data-theme');
  localStorage.clear();
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: originalMatchMedia,
  });
});

describe('NavBar theme controls', () => {
  test('uses device preference when no valid saved theme exists', () => {
    localStorage.setItem('theme', 'invalid');
    mockMatchMedia(true);

    renderWithProviders(<NavBar active="home" />);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' }),
    ).toBeTruthy();
  });

  test('persists manual theme selection through remounts and device changes', () => {
    const mediaQuery = mockMatchMedia(false);

    renderWithProviders(<NavBar active="home" />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Switch to dark mode' }),
    );

    expect(localStorage.getItem('theme')).toBe('dark');
    expect(mediaQuery.listenerCount()).toBe(0);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' }),
    ).toBeTruthy();

    act(() => {
      mediaQuery.setMatches(false);
    });

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    cleanup();
    renderWithProviders(<NavBar active="home" />);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' }),
    ).toBeTruthy();
  });

  test('updates theme when device preference changes and cleans up listener', () => {
    const mediaQuery = mockMatchMedia(false);

    renderWithProviders(<NavBar active="home" />);

    expect(mediaQuery.listenerCount()).toBe(1);
    act(() => {
      mediaQuery.setMatches(true);
    });

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' }),
    ).toBeTruthy();

    cleanup();
    expect(mediaQuery.listenerCount()).toBe(0);
  });
});
