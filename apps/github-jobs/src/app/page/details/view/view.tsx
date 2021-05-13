import { useParams } from 'react-router-dom'
import React from 'react'

import { StyledView } from './view.style'

export type ViewProps = {
  id: string
}

const View = ({ id = 'random-id' }: ViewProps) => {
  return (
    <StyledView>
      <div id={id}>THIS IS THE DETAILS PAGE!!!!</div>
    </StyledView>
  )
}

export default View
