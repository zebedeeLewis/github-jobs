import { FilterInput } from '@shared/ui/component'

import { HomePageComponent } from '../view-component'
import * as Job from '../../../job'

export type Props = {
  jobs: Array<Job.State.Model>
  isLoadingJobs: boolean
  loadNextPage: () => void
  applyFilters: () => void
  updateFilters: FilterInput.UpdateFilters
}

export const HomePageContainer = (props: Props) => {
  return <HomePageComponent {...props} />
}
