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
  const props = {
    isDarkModeOn,
    toggleDarkMode,
    src: logoSrc,
    alt: logoAlt,
  }

  return <HeaderComponent {...props} />
}
