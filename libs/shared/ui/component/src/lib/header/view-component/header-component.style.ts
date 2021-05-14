import styled from 'styled-components'

import * as theme from '@shared/ui/theme'

const HEADER_HEIGHT_PX = 136

export type Props = {
  themeScheme: theme.Color.ThemeScheme
}

export const StyledHeaderComponent = styled.div<Props>`
  height: ${HEADER_HEIGHT_PX}px;

  ${(props) => theme.Color.withBgPrimary(props.themeScheme)}
`
