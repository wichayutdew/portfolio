import { describe, test, expect, afterEach } from 'bun:test';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders, cleanup } from '../../test-utils';
import Contact from '../contact';
import INFO from '../../data/user';

afterEach(() => {
  cleanup();
});

describe('Contact', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Contact />);
  });

  test("renders the navigation bar with 'contact' active", () => {
    renderWithProviders(<Contact />);
    const nav = document.querySelector('.nav-background');
    const activeLink = nav!.querySelector('li.active a');
    expect(activeLink).toBeTruthy();
    expect(activeLink!.textContent).toBe('Contact');
  });

  test('renders navigation bar and footer links', () => {
    renderWithProviders(<Contact />);
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Projects').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Articles').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(2);
  });

  test('displays the contact heading', () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText(/Get in Touch/)).toBeInTheDocument();
  });

  test('displays the email address', () => {
    renderWithProviders(<Contact />);
    const emailElements = screen.getAllByText(INFO.main.email);
    expect(emailElements.length).toBeGreaterThanOrEqual(1);
  });

  test('renders social media links', () => {
    renderWithProviders(<Contact />);
    const twitterLinks = screen.getAllByText('Follow on Twitter');
    expect(twitterLinks.length).toBeGreaterThanOrEqual(1);

    const githubLinks = screen.getAllByText('Follow on GitHub');
    expect(githubLinks.length).toBeGreaterThanOrEqual(1);
  });

  test('renders the footer', () => {
    renderWithProviders(<Contact />);
    const footer = screen.getByText(/All Rights Reserved/);
    expect(footer).toBeInTheDocument();
  });

  test('sets the correct page title', () => {
    renderWithProviders(<Contact />);
    expect(document.title).toContain('Contact');
  });
});
