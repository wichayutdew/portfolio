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

  test('displays the page description from INFO data', () => {
    renderWithProviders(<Homepage />);
    expect(screen.getByText(INFO.homepage.description)).toBeInTheDocument();
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
    expect(screen.getAllByText('Articles').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(2);
  });

  test('renders social media links', () => {
    renderWithProviders(<Homepage />);
    const allLinks = document.querySelectorAll('a[target="_blank"]');
    expect(allLinks.length).toBeGreaterThanOrEqual(4);
  });

  test('renders project cards', () => {
    renderWithProviders(<Homepage />);
    for (const project of INFO.projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  test('renders the homepage profile image', () => {
    renderWithProviders(<Homepage />);
    const img = screen.getByAltText('about');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/homepage.jpg');
  });

  test('renders the footer', () => {
    renderWithProviders(<Homepage />);
    const footer = screen.getByText(/All Rights Reserved/);
    expect(footer).toBeInTheDocument();
  });
});
