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
    for (const project of INFO.projects.list) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  test('renders labelled GitHub icon links without making project cards links', () => {
    renderWithProviders(<Projects />);

    expect(document.querySelectorAll('.project > a')).toHaveLength(0);

    for (const project of INFO.projects.list) {
      const githubAction = project.actions.find(
        (action) => action.label === 'GitHub',
      );
      expect(githubAction).toBeDefined();
      expect(
        screen.getByRole('link', {
          name: `GitHub: ${project.title}`,
        }),
      ).toHaveAttribute('href', githubAction!.link);
    }
  });

  test('applies accent color only to hovered project action icons', async () => {
    const stylesheet = await Bun.file(
      new URL('../../components/projects/styles/project.css', import.meta.url),
    ).text();

    expect(stylesheet).not.toContain('.project:hover .project-action');
    expect(stylesheet).toContain('.project-action:hover');
  });

  test('renders Pi Workflows with requested logo, description, and actions', () => {
    renderWithProviders(<Projects />);

    const piWorkflows = INFO.projects.list.find(
      (project) => project.title === 'Pi Workflows',
    );
    expect(piWorkflows).toBeDefined();
    expect(piWorkflows!.description).toBe(
      'A declarative, pauseable workflow harness for Pi.',
    );
    expect(piWorkflows!.logo).toBe('https://pi.dev/logo-auto.svg');

    expect(screen.getByAltText('Pi Workflows logo')).toHaveAttribute(
      'src',
      'https://pi.dev/logo-auto.svg',
    );
    expect(
      screen.getByRole('link', { name: 'GitHub: Pi Workflows' }),
    ).toHaveAttribute('href', 'https://github.com/wichayutdew/pi-workflows');
    expect(
      screen.getByRole('link', { name: 'npm: Pi Workflows' }),
    ).toHaveAttribute(
      'href',
      'https://www.npmjs.com/package/@wichayutdew/pi-workflows',
    );
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
