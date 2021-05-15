import { ThemeSwitchComponent } from '../view-component'

export type Props = {
  toggled?: boolean
  toggleThemeScheme: () => void
}

export const ThemeSwitchContainer = ({
  toggled = true,
  toggleThemeScheme,
}: Props) => {
  return (
    <ThemeSwitchComponent
      toggleThemeScheme={toggleThemeScheme}
      toggled={toggled}
    />
  )
}
