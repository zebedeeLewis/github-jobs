import * as _ from 'underscore'
import * as Job from '@domain/entity/job'
import * as State from '@presentation/ui/state'


export const JOBS_LOADED = 'JOBS_LOADED'
export type JobsLoadedEvent
  = { type: typeof JOBS_LOADED, payload: Array<Job.Model> }


/**
 * This event message is used to alert the system that the operation to
 * load jobs from the repository was successful.
 */
type jobsLoaded = ( j: Array<Job.Model>) => JobsLoadedEvent
export const jobsLoaded: jobsLoaded
  = jobs => ({
      type: JOBS_LOADED,
      payload: jobs,
    })


/** Handle the jobs loaded event message */
type handleJobsLoaded
  =  (s: State.State)
  => (m: JobsLoadedEvent)
  => State.State
export const handleJobsLoaded: handleJobsLoaded
  = state => msg =>
    _.compose(
      State.setJobStatus(State.LOADING_DONE),
      State.appendJobList(msg.payload),
    )(state)
    
