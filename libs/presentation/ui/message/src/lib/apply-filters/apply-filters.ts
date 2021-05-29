import * as _ from 'underscore'
import * as Job from '@domain/entity/job'
import * as State from '@presentation/ui/state'


export const APPLY_FILTERS = 'APPLY_FILTERS'
export type ApplyFiltersCommand = {
  type: typeof APPLY_FILTERS,
  payload: Job.DAO.Filters
}


/**
 * This command message is used to direct the system to apply the given
 * filters to the job list.
 */
type applyFilters = (f: Job.DAO.Filters) => ApplyFiltersCommand
export const applyFilters: applyFilters
  = filters => ({
      type: APPLY_FILTERS,
      payload: filters,
    })


/** handle the apply filters event message */
type handleApplyFilters
  =  (s: State.State)
  => (m: ApplyFiltersCommand)
  => State.State
export const handleApplyFilters: handleApplyFilters
  = state => msg => _.compose(
      State.setJobStatus(State.LOADING),
      State.setCurrentPage(State.NO_PAGE_LOADED),
      State.setJobList([]),
      State.setFilters(msg.payload),
    )(state)

