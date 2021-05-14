import * as theme from '@shared/ui/theme'
import { StyledNotFoundPageComponent } from './404-page-component.style'

export const NotFoundPageComponent = () => (
  <StyledNotFoundPageComponent themeScheme={theme.Color.LIGHT}>
    <div>THIS IS THE 404 PAGE!!!!</div>
  </StyledNotFoundPageComponent>
)
