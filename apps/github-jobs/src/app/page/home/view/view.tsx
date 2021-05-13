import { StyledView } from './view.style'

export type ViewProps = {
  id: string
}

const View = ({ id = 'random-id' }: ViewProps) => (
  <StyledView>
    <div id={id}>THIS IS THE HOME PAGE!!!!</div>
  </StyledView>
)

export default View
