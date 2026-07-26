import { describe, test, expect, afterEach } from 'bun:test';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders, cleanup } from '../../test-utils';
import Articles from '../articles';

afterEach(() => {
  cleanup();
});

describe('Articles', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Articles />);
  });

  test("renders the navigation bar with 'articles' active", () => {
    renderWithProviders(<Articles />);
    const nav = document.querySelector('.nav-background');
    const activeLink = nav!.querySelector('li.active a');
    expect(activeLink).toBeTruthy();
    expect(activeLink!.textContent).toBe('Articles');
  });

  test('renders Articles in navigation and footer', () => {
    renderWithProviders(<Articles />);
    const articleLinks = screen.getAllByRole('link', { name: 'Articles' });
    expect(articleLinks).toHaveLength(2);
    expect(articleLinks[0]).toHaveAttribute('href', '/articles');
    expect(articleLinks[1]).toHaveAttribute('href', '/articles');
  });

  test('displays the articles heading', () => {
    renderWithProviders(<Articles />);
    expect(
      screen.getByText(/passionate about pushing the boundaries/),
    ).toBeInTheDocument();
  });

  test('displays the articles description', () => {
    renderWithProviders(<Articles />);
    expect(screen.getByText(/Collection/)).toBeInTheDocument();
  });

  test('lists requested externally linked guides without an empty state', () => {
    renderWithProviders(<Articles />);

    expect(
      screen.getByRole('link', {
        name: 'Read guide: Install, set up, and use pi-workflows',
      }),
    ).toHaveAttribute('href', 'https://github.com/wichayutdew/pi-workflows');
    expect(
      screen.getByRole('link', {
        name: 'Read guide: Install Arch Linux with Limine, Ly, and Hyprland',
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/wichayutdew/dotfiles-arch/blob/master/README.md',
    );
    expect(
      screen.queryByText('No articles yet. Check back soon!'),
    ).not.toBeInTheDocument();
  });

  test('renders the footer', () => {
    renderWithProviders(<Articles />);
    const footer = screen.getByText(/All Rights Reserved/);
    expect(footer).toBeInTheDocument();
  });

  test('sets the correct page title', () => {
    renderWithProviders(<Articles />);
    expect(document.title).toContain('Articles');
  });
});
