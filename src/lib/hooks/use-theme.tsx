'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const initialState = {
  isDarkMode: false,
  toggle: () => {
    return;
  },
  enableDarkMode: (_: boolean) => {
    return;
  },
  disableDarkMode: (_: boolean) => {
    return;
  },
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initially set to `null` to handle document-based operations only after mounting
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  const toggle = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const enableDarkMode = useCallback(() => {
    setIsDarkMode(true);
  }, []);

  const disableDarkMode = useCallback(() => {
    setIsDarkMode(false);
  }, []);

  useEffect(() => {
    // Ensure we access localStorage only on the client-side
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        setIsDarkMode(JSON.parse(savedTheme));
      } else {
        // Fallback to default theme if no saved theme is found
        setIsDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    // Run this effect only after the component mounts and when isDarkMode is not null
    if (isDarkMode === null) return; // Don't do anything until isDarkMode is determined

    if (typeof document !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  // Prevent rendering until `isDarkMode` is determined
  if (isDarkMode === null) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggle,
        enableDarkMode,
        disableDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
