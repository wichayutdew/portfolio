import { describe, test, expect, afterEach } from 'bun:test';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders, cleanup } from '../../test-utils';
import Projects from '../projects';
import INFO from '../../data/user';

afterEach(() => {
  cleanup();
});

describe('Projects', () => {
  test('renders without crashing', () => {
    renderWithProviders(<Projects />);
  });

  test("renders the navigation bar with 'projects' active", () => {
    renderWithProviders(<Projects />);
    const nav = document.querySelector('.nav-background');
    const activeLink = nav!.querySelector('li.active a');
    expect(activeLink).toBeTruthy();
    expect(activeLink!.textContent).toBe('Projects');
  });

  test('renders navigation bar and footer links', () => {
    renderWithProviders(<Projects />);
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Projects').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Articles').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(2);
  });

  test('displays the projects heading', () => {
    renderWithProviders(<Projects />);
    expect(
      screen.getByText(/Things I.*ve made trying to put my dent/),
    ).toBeInTheDocument();
  });

  test('displays the projects description', () => {
    renderWithProviders(<Projects />);
    expect(
      screen.getByText(/I.*ve worked on a variety of projects/),
    ).toBeInTheDocument();
  });

  test('renders all project cards', () => {
    renderWithProviders(<Projects />);
    for (const project of INFO.projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  test('renders project links with correct text', () => {
    renderWithProviders(<Projects />);
    const viewLinks = screen.getAllByText('View Project');
    expect(viewLinks).toHaveLength(INFO.projects.length);
  });

  test('renders the footer', () => {
    renderWithProviders(<Projects />);
    const footer = screen.getByText(/All Rights Reserved/);
    expect(footer).toBeInTheDocument();
  });

  test('sets the correct page title', () => {
    renderWithProviders(<Projects />);
    expect(document.title).toContain('Projects');
  });
});
