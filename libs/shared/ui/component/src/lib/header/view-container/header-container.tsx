import { HeaderComponent } from '../view-component'

export type Props = {
  logoSrc: string
  logoAlt: string
}

export const HeaderContainer = ({ logoSrc, logoAlt }: Props) => {
  return <HeaderComponent src={logoSrc} alt={logoAlt} />
}
