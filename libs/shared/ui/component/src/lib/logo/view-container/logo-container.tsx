import { LogoComponent } from '../view-component'

export type Props = {
  imgSrc: string
  alt: string
}

export const LogoContainer = ({ imgSrc, alt }: Props) => {
  return <LogoComponent imgSrc={imgSrc} alt={alt} />
}
