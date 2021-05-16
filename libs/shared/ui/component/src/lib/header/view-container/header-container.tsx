import { HeaderComponent } from '../view-component'

export type Props = {
  logoSrc: string
  logoAlt: string
  isDarkModeOn: boolean
  toggleDarkMode: () => void
}

export const HeaderContainer = ({
  logoSrc,
  logoAlt,
  isDarkModeOn,
  toggleDarkMode,
}: Props) => {
  return (
    <HeaderComponent
      src={logoSrc}
      alt={logoAlt}
      isDarkModeOn={isDarkModeOn}
      toggleDarkMode={toggleDarkMode}
    />
  )
}
