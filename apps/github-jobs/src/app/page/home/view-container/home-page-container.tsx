import { HomePageComponent } from '../view-component'
import * as Job from '../../../job'

export type Props = {
  jobs: Array<Job.State.Model>
}

export const HomePageContainer = ({ jobs = [] }: Props) => {
  return <HomePageComponent jobs={jobs} />
}
