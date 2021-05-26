import { createMuiTheme } from '@material-ui/core/styles'

export type ThemeScheme = 'dark' | 'light'

export const DARK: ThemeScheme = 'dark'
export const LIGHT: ThemeScheme = 'light'

export const Violet = '#5964E0'
export const LightViolet = '#939bf4'
export const VeryDarkBlue = '#19202d'
export const Midnight = '#121721'
export const White = '#ffffff'
export const LightGray = '#f4f6f8'
export const Gray = '#9daec2'
export const DarkGray = '#6e8098'

/**
 * Determine if the given theme scheme is light or dark.
 *
 * @param themeScheme - the theme scheme whose type we want to check.
 *
 * @returns true of the given theme scheme is light. Otherwise returns
 * false.
 */
export const isLight = (themeScheme: ThemeScheme) =>
  themeScheme === LIGHT

/**
 * Initializes the material ui theme for the app.
 *
 * @param themeScheme - used to select which theme to use.
 *
 * @returns a material UI theme where. If selected theme scheme is light
 * then the light them is returned. Otherwise the dark theme is returned.
 */
export const setTo = (themeScheme: ThemeScheme) =>
  createMuiTheme({
    palette: {
      type: themeScheme,
      primary: {
        main: Violet,
      },
      secondary: {
        main: LightGray,
      },
    },
  })
