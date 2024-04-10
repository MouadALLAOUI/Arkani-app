import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import THEME from '../variant/theme'; // Assuming this is a valid import for your theme
import type { RootState } from './store';

interface ThemeState {
  isDarkMode: boolean;
  themeMode: typeof THEME.light | typeof THEME.dark;
}

const initialThemeMode = THEME.light;

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: false,
    themeMode: initialThemeMode,
  } as ThemeState, // Use ThemeState as the type for initialState
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleThemeMode: (state) => {
      state.themeMode = state.isDarkMode ? THEME.dark : THEME.light;
    },
    setThemeMode: (state, action: PayloadAction<typeof THEME.light | typeof THEME.dark>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleThemeMode, setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;

// Define the type for your selectors
export const getTheme = (state: RootState): typeof THEME.light | typeof THEME.dark => state.theme.themeMode;
export const isDark = (state: RootState): boolean => state.theme.isDarkMode;
