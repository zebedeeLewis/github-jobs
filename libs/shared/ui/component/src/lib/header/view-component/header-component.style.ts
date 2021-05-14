import styled from 'styled-components'

import * as theme from '@shared/ui/theme'

const HEADER_HEIGHT_PX = 136
const HEADER_TOP_PADDING_PX = 32

export type Props = {
  themeScheme: theme.Color.ThemeScheme
}

export const StyledHeaderComponent = styled.div<Props>`
  height: ${HEADER_HEIGHT_PX}px;
  padding-top: ${HEADER_TOP_PADDING_PX}px;
  box-sizing: border-box;

  ${(props) => theme.Color.withBgPrimary(props.themeScheme)}
`
