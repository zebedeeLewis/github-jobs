import { StyledView } from './view.style'

export type ViewProps = {
  id: string
}

const View = ({ id = 'random-id' }: ViewProps) => (
  <StyledView>
    <div id={id}>SORRY MATE WE COULDN'T FIND THAT PAGE</div>
  </StyledView>
)

export default View
