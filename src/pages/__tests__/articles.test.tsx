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

  test('renders navigation bar and footer links', () => {
    renderWithProviders(<Articles />);
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Projects').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Articles').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(2);
  });

  test('displays the articles heading', () => {
    renderWithProviders(<Articles />);
    expect(
      screen.getByText(/passionate about pushing the boundaries/),
    ).toBeInTheDocument();
  });

  test('displays the articles description', () => {
    renderWithProviders(<Articles />);
    expect(screen.getByText(/Chronological collection/)).toBeInTheDocument();
  });

  test('shows empty state message', () => {
    renderWithProviders(<Articles />);
    expect(
      screen.getByText('No articles yet. Check back soon!'),
    ).toBeInTheDocument();
  });

  test('has a back to home link', () => {
    renderWithProviders(<Articles />);
    const backLink = screen.getByText(/Back to Home/);
    expect(backLink).toHaveAttribute('href', '/');
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
