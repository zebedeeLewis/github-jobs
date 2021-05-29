import * as State from '@presentation/ui/state'

export const LOAD_JOBS = 'LOAD_JOBS'
export type LoadJobsCommand = {type: typeof LOAD_JOBS, payload: number}


/**
 * This command message is used to direct the system to load the jobs
 * from the given page after applying the given filters.
 */
type loadJobs_s = (p: number) => LoadJobsCommand
export const loadJobs: loadJobs_s = pageNumber => ({
  type: LOAD_JOBS,
  payload: pageNumber,
})

/** Handle the load jobs command message */
type handleLoadJobs_s
  =  (s: State.State)
  => (m: LoadJobsCommand)
  => State.State

export const handleLoadJobs: handleLoadJobs_s = state => msg =>
  State.setJobs(
    State.setJobDataStatus(State.LOADING)(State.getJobs(state))
  )(state)
