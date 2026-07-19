import { describe, test, expect, afterEach } from 'bun:test';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders, cleanup } from '../../test-utils';
import About from '../about';
import INFO from '../../data/user';

afterEach(() => {
  cleanup();
});

describe('About', () => {
  test('renders without crashing', () => {
    renderWithProviders(<About />);
  });

  test('displays the about title', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(INFO.about.title)).toBeInTheDocument();
  });

  test('displays the about description', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(INFO.about.description)).toBeInTheDocument();
  });

  test("renders the navigation bar with 'about' active", () => {
    renderWithProviders(<About />);
    const nav = document.querySelector('.nav-background');
    const activeLink = nav!.querySelector('li.active a');
    expect(activeLink).toBeTruthy();
    expect(activeLink!.textContent).toBe('About');
  });

  test('renders navigation bar and footer links', () => {
    renderWithProviders(<About />);
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Projects').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(2);
  });

  test('renders the about profile image', () => {
    renderWithProviders(<About />);
    const img = screen.getByAltText('about');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', INFO.main.profile);
  });

  test('renders social media links', () => {
    renderWithProviders(<About />);
    expect(screen.getAllByText('GitHub').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('LinkedIn').length).toBeGreaterThanOrEqual(1);
  });

  test('renders the email link', () => {
    renderWithProviders(<About />);
    const emailElements = screen.getAllByText(INFO.main.email);
    expect(emailElements.length).toBeGreaterThanOrEqual(1);
  });

  test('renders the footer', () => {
    renderWithProviders(<About />);
    const footer = screen.getByText(/All Rights Reserved/);
    expect(footer).toBeInTheDocument();
  });

  test('sets the correct page title', () => {
    renderWithProviders(<About />);
    expect(document.title).toContain('About');
  });
});
