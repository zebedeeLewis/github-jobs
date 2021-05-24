import { FilterInput } from '@shared/ui/component'
import * as Job from '@libs/domain/job'

import { HomePageComponent } from '../view-component'

export type Props = {
  jobs: Array<Job.Model>
  isLoadingJobs: boolean
  loadNextPage: () => void
  applyFilters: () => void
  updateFilters: FilterInput.UpdateFilters
}

export const HomePageContainer = (props: Props) => {
  return <HomePageComponent {...props} />
}
