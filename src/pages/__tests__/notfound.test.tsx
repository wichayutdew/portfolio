import { describe, test, expect, afterEach } from 'bun:test';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders, cleanup } from '../../test-utils';
import NotFound from '../notfound';

afterEach(() => {
  cleanup();
});

describe('NotFound', () => {
  test('renders without crashing', () => {
    renderWithProviders(<NotFound />);
  });

  test('displays the 404 title', () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  test('displays the not found message', () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText(/doesn.*t exist/)).toBeInTheDocument();
  });

  test('has a back to home link', () => {
    renderWithProviders(<NotFound />);
    const backLink = screen.getByText(/Back to Home/);
    expect(backLink).toHaveAttribute('href', '/');
  });

  test('sets the correct page title', () => {
    renderWithProviders(<NotFound />);
    expect(document.title).toContain('404');
  });
});
