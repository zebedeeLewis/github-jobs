import * as State from '@presentation/ui/state'

export const JOBS_FAILED_TO_LOAD = 'JOBS_FAILED_TO_LOAD'
export type JobsFailedToLoadEvent = {
  type: typeof JOBS_FAILED_TO_LOAD,
  payload: string
}

/**
 * This event messge is used to alert the system that the operation to
 * load jobs from the repository has failed.
 *
 * @param reason - the reason why the load failed
 * @returns a new "jobs load failed" event message.
 */

type jobsFailedToLoad_s
  =  (reason: string)
  => JobsFailedToLoadEvent
export const jobsFailedToLoad: jobsFailedToLoad_s
  = ( reason: string): JobsFailedToLoadEvent => ({
    type: JOBS_FAILED_TO_LOAD,
    payload: reason,
  })

/** Handle the jobs failed to load event message TODO!!! */
type handleJobsFailedToLoad_s
  =  (s: State.State)
  => (m: JobsFailedToLoadEvent)
  => State.State
export const handleJobsFailedToLoad: handleJobsFailedToLoad_s
  = state => msg => state
