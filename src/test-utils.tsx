import { render, cleanup, type RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import type { ReactNode } from 'react';

function AllProviders({ children }: { children: ReactNode }) {
  return (
    <HelmetProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
  );
}

function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  // Ensure clean DOM before each render
  cleanup();
  return render(ui, { wrapper: AllProviders, ...options });
}

export { renderWithProviders, cleanup };
