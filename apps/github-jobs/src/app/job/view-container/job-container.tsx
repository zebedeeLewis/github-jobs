import { JobComponent } from '../view-component'
import * as State from '../state'

interface Props extends State.Model {
  key: string
}

export const JobContainer = ({ id }: State.Model) => {
  return <JobComponent />
}
