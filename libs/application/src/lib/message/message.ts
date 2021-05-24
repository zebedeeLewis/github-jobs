import * as Job from '@libs/domain/job'
import * as State from '../state'

export type Model<T, P> = { type: T; payload: P }

export const TOGGLE_DARK_MODE_OFF = 'TOGGLE_DARK_MODE_OFF'
export type TOGGLE_DARK_MODE_OFF_COMMAND = Model<
  typeof TOGGLE_DARK_MODE_OFF,
  undefined
>
/**
 * This command message is used to direct the system to turn off
 * dark mode.
 */
export const toggleDarkModeOff = (): TOGGLE_DARK_MODE_OFF_COMMAND => ({
  type: TOGGLE_DARK_MODE_OFF,
  payload: undefined,
})

export const DARK_MODE_OFF = 'DARK_MODE_OFF'
export type DARK_MODE_OFF_EVENT = Model<typeof DARK_MODE_OFF, undefined>
/**
 * This event message is used to alert the system that dark mode has
 * been toggled off.
 */
export const darkModeOff = (): DARK_MODE_OFF_EVENT => ({
  type: DARK_MODE_OFF,
  payload: undefined,
})

export const TOGGLE_DARK_MODE_ON = 'TOGGLE_DARK_MODE_ON'
export type TOGGLE_DARK_MODE_ON_COMMAND = Model<
  typeof TOGGLE_DARK_MODE_ON,
  undefined
>
/**
 * This command message is used to direct the system to toggle dark mode.
 */
export const toggleDarkModeOn = (): TOGGLE_DARK_MODE_ON_COMMAND => ({
  type: TOGGLE_DARK_MODE_ON,
  payload: undefined,
})

export const DARK_MODE_ON = 'DARK_MODE_ON'
export type DARK_MODE_ON_EVENT = Model<typeof DARK_MODE_ON, undefined>
/**
 * This event message is used to alert the system that dark mode has
 * been toggled on.
 */
export const darkModeOn = (): DARK_MODE_ON_EVENT => ({
  type: DARK_MODE_ON,
  payload: undefined,
})

export const LOAD_JOBS = 'LOAD_JOBS'
export type LOAD_JOBS_COMMAND = Model<typeof LOAD_JOBS, number>
/**
 * This command message is used to direct the system to load the jobs
 * from the given page after applying the given filters.
 */
export const loadJobs = (pageNumber: number): LOAD_JOBS_COMMAND => ({
  type: LOAD_JOBS,
  payload: pageNumber,
})

export const JOBS_LOADED = 'JOBS_LOADED'
export type JOBS_LOADED_EVENT = Model<
  typeof JOBS_LOADED,
  Array<Job.Model>
>
/**
 * This event message is used to alert the system that the operation to
 * load jobs from the repository was successful.
 *
 * @param jobs - the jobs that were loaded from the repository
 * @return a new jobs loaded event message
 */
export const jobsLoaded = (
  jobs: Array<Job.Model>
): JOBS_LOADED_EVENT => ({
  type: JOBS_LOADED,
  payload: jobs,
})

export const JOBS_FAILED_TO_LOAD = 'JOBS_FAILED_TO_LOAD'
export type JOBS_FAILED_TO_LOAD_EVENT = Model<
  typeof JOBS_FAILED_TO_LOAD,
  string
>
/**
 * This event messge is used to alert the system that the operation to
 * load jobs from the repository has failed.
 *
 * @param reason - the reason why the load failed
 * @returns a new "jobs load failed" event message.
 */

export const jobsFailedToLoad = (
  reason: string
): JOBS_FAILED_TO_LOAD_EVENT => ({
  type: JOBS_FAILED_TO_LOAD,
  payload: reason,
})

export type Msg =
  | LOAD_JOBS_COMMAND
  | JOBS_LOADED_EVENT
  | JOBS_FAILED_TO_LOAD_EVENT
  | TOGGLE_DARK_MODE_ON_COMMAND
  | DARK_MODE_ON_EVENT
  | TOGGLE_DARK_MODE_OFF_COMMAND
  | DARK_MODE_OFF_EVENT

/**
 * Updates the given state according to the given action.
 *
 * @param state - the current state of the app
 * @param action - the action to perform on the given state.
 *
 * @returns A new updated app state.
 */
export const patch = (
  model: State.State = State.create({}),
  msg: Msg
): State.State => {
  switch (msg.type) {
    case TOGGLE_DARK_MODE_ON:
      return State.setDarkModeToggle(State.DARK_MODE_ON)(model)
    case TOGGLE_DARK_MODE_OFF:
      return State.setDarkModeToggle(State.DARK_MODE_OFF)(model)
    default:
      return model
  }
}
