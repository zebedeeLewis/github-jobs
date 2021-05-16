import * as _ from 'underscore'

import * as State from '../state'
import * as Job from '../../job'
import * as Theme from '@shared/ui/theme'

/**
 * Represents all supported redux action type.
 */
export enum Type {
  TOGGLE_DARK_MODE_ON = 'TOGGLE_DARK_MODE_ON',
  TOGGLE_DARK_MODE_OFF = 'TOGGLE_DARK_MODE_OFF',
  UPDATE_JOBS = 'UPDATE_JOBS',
}

/**
 * Describes a redux action intended to turn on dark mode on the
 * app.
 */
export interface ToggleDarkModeOn {
  type: Type.TOGGLE_DARK_MODE_ON
}

/**
 * Describes a redux action intended to turn off dark mode on the
 * app.
 */
export interface ToggleDarkModeOff {
  type: Type.TOGGLE_DARK_MODE_OFF
}

/**
 * Describes a redux action intended to trigger the update of the
 * states jobs attribute with the given payload.
 */
export interface UpdateJobs {
  type: Type.UPDATE_JOBS
  payload: Array<Job.State.Model>
}

/**
 * Represents the valid redux actions for the application state.
 */
export type Model = ToggleDarkModeOn | ToggleDarkModeOff | UpdateJobs

/**
 * Create a new ToggleDarkModeOn action
 *
 * @returns A new ToggleDarkModeOn action.
 */
export const toggleDarkModeOn = (): ToggleDarkModeOn => ({
  type: Type.TOGGLE_DARK_MODE_ON,
})

/**
 * Create a new ToggleDarkModeOff action
 *
 * @returns A new ToggleDarkModeOff action.
 */
export const toggleDarkModeOff = (): ToggleDarkModeOff => ({
  type: Type.TOGGLE_DARK_MODE_OFF,
})

/**
 * Create a new UpdateJobs action
 *
 * @returns A new UpdateJobs action with the given array of jobs
 * as the payload.
 */
export const updateJobs = (
  jobs: Array<Job.State.Model>
): UpdateJobs => ({
  type: Type.UPDATE_JOBS,
  payload: jobs,
})

/**
 * Updates the given state according to the given action.
 *
 * @param state - the current state of the app
 * @param action - the action to perform on the given state.
 *
 * @returns A new updated app state.
 */
export const update = (
  state: State.Model = State.create({}),
  action: Model
): State.Model => {
  const currentJobs = State.getJobs(state)

  switch (action.type) {
    case Type.TOGGLE_DARK_MODE_ON:
      return State.setDarkModeToggle(State.DARK_MODE_ON)(state)
    case Type.TOGGLE_DARK_MODE_OFF:
      return State.setDarkModeToggle(State.DARK_MODE_OFF)(state)
    case Type.UPDATE_JOBS:
      return _.compose(
        State.setJobs([...currentJobs, ...action.payload]),
        State.setPageLoad(State.PageLoad.LOADED)
      )(state)
    default:
      return state
  }
}
