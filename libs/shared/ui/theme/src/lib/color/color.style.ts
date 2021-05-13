import { css } from 'styled-components'

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

export interface Theme {
  Primary: string
  PrimaryActive: string
  Secondary: string
  SecondaryActive: string
}

export const DarkTheme: Theme = {
  Primary: VeryDarkBlue,
  PrimaryActive: Midnight,
  Secondary: Gray,
  SecondaryActive: DarkGray,
}

export const LightTheme: Theme = {
  Primary: Violet,
  PrimaryActive: LightViolet,
  Secondary: White,
  SecondaryActive: LightGray,
}

export const withBgPrimary = (themeScheme: ThemeScheme = LIGHT) => {
  const activeTheme = themeScheme === LIGHT ? LightTheme : DarkTheme

  return css`
    background-color: ${activeTheme.Primary};
  `
}

export const withBgSecondary = (themeScheme: ThemeScheme = LIGHT) => {
  const activeTheme = themeScheme === LIGHT ? LightTheme : DarkTheme

  return css`
    background-color: ${activeTheme.Secondary};
  `
}
