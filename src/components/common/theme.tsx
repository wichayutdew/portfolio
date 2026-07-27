import { createContext, use, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
  hasManualPreference: boolean;
}

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = 'theme';
const ThemeContext = createContext<ThemeContextValue | null>(null);

const getStoredTheme = (): Theme | null => {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'dark' || storedTheme === 'light'
      ? storedTheme
      : null;
  } catch {
    return null;
  }
};

const getDeviceTheme = (): Theme => {
  if (typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const getInitialThemeState = (): ThemeState => {
  const storedTheme = getStoredTheme();

  return {
    theme: storedTheme ?? getDeviceTheme(),
    hasManualPreference: storedTheme !== null,
  };
};

function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeState, setThemeState] =
    useState<ThemeState>(getInitialThemeState);

  useEffect(() => {
    document.documentElement.dataset.theme = themeState.theme;
  }, [themeState.theme]);

  useEffect(() => {
    if (
      themeState.hasManualPreference ||
      typeof window.matchMedia !== 'function'
    ) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handlePreferenceChange = (event: MediaQueryListEvent) => {
      setThemeState((currentThemeState) => {
        if (currentThemeState.hasManualPreference) {
          return currentThemeState;
        }

        return {
          ...currentThemeState,
          theme: event.matches ? 'dark' : 'light',
        };
      });
    };

    mediaQuery.addEventListener('change', handlePreferenceChange);
    return () =>
      mediaQuery.removeEventListener('change', handlePreferenceChange);
  }, [themeState.hasManualPreference]);

  const toggleTheme = () => {
    const theme = themeState.theme === 'dark' ? 'light' : 'dark';

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Keep the explicit choice for the current provider when storage is unavailable.
    }

    setThemeState({ theme, hasManualPreference: true });
  };

  return (
    <ThemeContext value={{ theme: themeState.theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}

function useTheme() {
  const theme = use(ThemeContext);

  if (theme === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return theme;
}

export { ThemeProvider, useTheme };
