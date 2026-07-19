import { describe, test, expect, afterEach } from 'bun:test';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders, cleanup } from '../../test-utils';
import Homepage from '../homepage';
import INFO from '../../data/user';

afterEach(() => {
  cleanup();
});

describe('Homepage', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Homepage />);
  });

  test('displays the page title from INFO data', () => {
    renderWithProviders(<Homepage />);
    expect(screen.getByText(INFO.homepage.title)).toBeInTheDocument();
  });

  test('renders the navigation bar with correct active state', () => {
    renderWithProviders(<Homepage />);
    const nav = document.querySelector('.nav-background');
    const homeLink = nav!.querySelector('li.active a');
    expect(homeLink).toBeTruthy();
    expect(homeLink!.textContent).toBe('Home');
  });

  test('renders navigation bar and footer links', () => {
    renderWithProviders(<Homepage />);
    // Both navbar and footer have these links, so use getAllByText
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Projects').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(2);
  });

  test('renders social media links', () => {
    renderWithProviders(<Homepage />);
    const allLinks = document.querySelectorAll('a[target="_blank"]');
    expect(allLinks.length).toBeGreaterThanOrEqual(4);
  });

  test('renders the footer', () => {
    renderWithProviders(<Homepage />);
    const footer = screen.getByText(/All Rights Reserved/);
    expect(footer).toBeInTheDocument();
  });

  test('CV button links to /api/cv with correct attributes', () => {
    renderWithProviders(<Homepage />);
    const cvLink = screen.getByText(/View my CV/).closest('a');
    expect(cvLink).toBeTruthy();
    expect(cvLink).toHaveAttribute('href', '/api/cv');
    expect(cvLink).toHaveAttribute('target', '_blank');
    expect(cvLink).toHaveAttribute('rel', 'noreferrer');
    expect(cvLink).toHaveClass('homepage-cv-button');
  });
});
