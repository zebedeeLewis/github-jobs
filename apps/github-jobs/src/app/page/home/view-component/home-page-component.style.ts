import styled from 'styled-components'
import * as theme from '@shared/ui/theme'

export type Props = {
  themeScheme: theme.Color.ThemeScheme
}

export const StyledHomePageComponent = styled.div<Props>`
  height: 128px;
  display: flex;

  ${(props) => theme.Color.withBgSecondary(props.themeScheme)}
`
