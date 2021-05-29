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
type applyFilters_s = (f: Job.DAO.Filters) => ApplyFiltersCommand
export const applyFilters: applyFilters_s
  = filters => ({
      type: APPLY_FILTERS,
      payload: filters,
    })

/** Clears all loaded jobs, and set jobs status to loading */
type clearJobs_s = (s: State.State) => State.Data<Array<Job.Model>>
export const clearJobs: clearJobs_s
  = <clearJobs_s>_.compose(
      State.setJobData([]),
      State.setJobDataStatus(State.LOADING),
      State.getJobs
    )

/** handle the apply filters event message */
type handleApplyFilters_s
  =  (s: State.State)
  => (m: ApplyFiltersCommand)
  => State.State
export const handleApplyFilters: handleApplyFilters_s
  = state => msg => _.compose(
      State.setJobs( clearJobs(state) ),
      State.setCurrentPage(0),
      State.setFilters(msg.payload),
    )(state)

