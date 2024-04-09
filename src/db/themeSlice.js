import { createSlice } from '@reduxjs/toolkit';
import THEME from '../variant/theme.jsx';

const theme_light = THEME.light;
const theme_dark = THEME.dark;

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: false,
    themeMode: theme_light,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleThemeMode: (state) => {
      state.themeMode = state.isDarkMode ? theme_dark : theme_light;
    },
  }
});

export const { toggleDarkMode, setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
export const getTheme = (state) => state.theme.themeMode;
export const isDark = (state) => state.theme.isDarkMode;
