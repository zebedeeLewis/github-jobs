import { HeaderComponent } from '../view-component'

export type Props = {
  logoSrc: string
  logoAlt: string
  themeSwitchToggled: boolean
  toggleDarkMode: () => void
}

export const HeaderContainer = ({
  logoSrc,
  logoAlt,
  themeSwitchToggled,
  toggleDarkMode,
}: Props) => {
  return (
    <HeaderComponent
      src={logoSrc}
      alt={logoAlt}
      themeSwitchToggled={themeSwitchToggled}
      toggleDarkMode={toggleDarkMode}
    />
  )
}
