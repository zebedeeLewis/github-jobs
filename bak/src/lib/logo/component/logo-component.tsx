import { StyleLogoComponent } from './logo-component.style'

export type Props = {
  imgSrc: string
  alt: string
}

export const LogoComponent = ({ imgSrc, alt = 'Logo' }: Props) => (
  <StyleLogoComponent>
    <img src={imgSrc} alt={alt} />
  </StyleLogoComponent>
)
