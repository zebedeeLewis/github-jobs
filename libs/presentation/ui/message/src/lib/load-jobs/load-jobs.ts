import * as State from '@presentation/ui/state'

export const LOAD_JOBS = 'LOAD_JOBS'
export type LoadJobsCommand = {type: typeof LOAD_JOBS, payload: number}


/**
 * This command message is used to direct the system to load the jobs
 * from the given page after applying the given filters.
 */
type loadJobs = (p: number) => LoadJobsCommand
export const loadJobs: loadJobs
  = pageNumber => ({
      type: LOAD_JOBS,
      payload: pageNumber,
    })


/** Handle the load jobs command message */
type handleLoadJobs
  =  (s: State.State)
  => (m: LoadJobsCommand)
  => State.State
export const handleLoadJobs: handleLoadJobs
  = state => msg => State.setJobStatus(State.LOADING)(state)
