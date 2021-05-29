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
type jobsLoaded_s = ( j: Array<Job.Model>) => JobsLoadedEvent
export const jobsLoaded: jobsLoaded_s = jobs => ({
  type: JOBS_LOADED,
  payload: jobs,
})


/**
 * append the list of jobs recieved in the payload to the jobs
 * array in the given jobs data object and set the status to 
 * LOADING_DONE.
 */
type appendPayloadToJobs_s
  =  (p: Array<Job.Model>)
  => (j: State.Data<Array<Job.Model>>)
  => State.Data<Array<Job.Model>>
export const appendPayloadToJobs: appendPayloadToJobs_s
  = payload => jobsData =>
    _.compose(
      State.setJobData([...State.getJobData(jobsData), ...payload]),
      State.setJobDataStatus(State.LOADING_DONE)
    )(jobsData)

/** Handle the jobs loaded event message */
type handleJobsLoaded_s
  =  (s: State.State)
  => (m: JobsLoadedEvent)
  => State.State
export const handleJobsLoaded: handleJobsLoaded_s
  = state => msg =>
    State.setJobs(
      _.compose(
        appendPayloadToJobs(msg.payload),
        State.getJobs,
      )(state)
    )(state)
