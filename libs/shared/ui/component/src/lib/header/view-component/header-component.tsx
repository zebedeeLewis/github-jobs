import { Container } from '@material-ui/core'
import { StyledHeaderComponent } from './header-component.style'
import * as theme from '@shared/ui/theme'
import { View as Logo } from '../../logo'

export type Props = {
  src: string
  alt: string
}

export const HeaderComponent = ({ src, alt }: Props) => (
  <StyledHeaderComponent themeScheme={theme.Color.LIGHT}>
    <Container>
      <Logo imgSrc={src} alt={alt} />
    </Container>
  </StyledHeaderComponent>
)
