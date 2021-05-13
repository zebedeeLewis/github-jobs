import { StyledView } from './view.style'

export type ViewProps = {
  id: string
}

const View = ({ id = 'random-id' }: ViewProps) => (
  <StyledView>
    <div id={id}>Header goes here</div>
  </StyledView>
)

export default View
