import { HeaderComponent } from '../view-component'

export type Props = {
  logoSrc: string
  logoAlt: string
  themeSwitchToggled: boolean
  toggleThemeScheme: () => void
}

export const HeaderContainer = ({
  logoSrc,
  logoAlt,
  themeSwitchToggled,
  toggleThemeScheme,
}: Props) => {
  return (
    <HeaderComponent
      src={logoSrc}
      alt={logoAlt}
      themeSwitchToggled={themeSwitchToggled}
      toggleThemeScheme={toggleThemeScheme}
    />
  )
}
