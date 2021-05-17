import { HomePageComponent } from '../view-component'
import * as Job from '../../../job'

export type Props = {
  jobs: Array<Job.State.Model>
  isLoadingJobs: boolean
  loadNextPage: () => void
}

export const HomePageContainer = ({
  jobs = [],
  isLoadingJobs = true,
  loadNextPage,
}: Props) => {
  return (
    <HomePageComponent
      jobs={jobs}
      isLoadingJobs={isLoadingJobs}
      loadNextPage={loadNextPage}
    />
  )
}
