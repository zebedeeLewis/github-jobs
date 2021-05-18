import { HeaderComponent } from '../view-component'
import type { UpdateFilters } from '../../filter-input'

export type Props = {
  logoSrc: string
  logoAlt: string
  isDarkModeOn: boolean
  toggleDarkMode: () => void
  applyFilters: () => void
  updateFilters: UpdateFilters
}

export const HeaderContainer = ({
  logoSrc,
  logoAlt,
  isDarkModeOn,
  toggleDarkMode,
  applyFilters,
  updateFilters,
}: Props) => {
  const props = {
    isDarkModeOn,
    toggleDarkMode,
    applyFilters,
    updateFilters,
    src: logoSrc,
    alt: logoAlt,
  }

  return <HeaderComponent {...props} />
}
