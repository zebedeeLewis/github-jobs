import * as theme from '@shared/ui/theme'
import { StyledHomePageComponent } from './home-page-component.style'

export const HomePageComponent = () => (
  <StyledHomePageComponent themeScheme={theme.Color.LIGHT}>
    <div>THIS IS THE HOME PAGE!!!!</div>
  </StyledHomePageComponent>
)
