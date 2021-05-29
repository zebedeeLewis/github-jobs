import * as State from '@presentation/ui/state'

import {
  TOGGLE_DARK_MODE_OFF,
  ToggleDarkModeOffCommand,
  handleToggleDarkModeOff
} from './toggle-dark-mode-off'

import {
  TOGGLE_DARK_MODE_ON,
  ToggleDarkModeOnCommand,
  handleToggleDarkModeOn,
} from './toggle-dark-mode-on'

import {
  LOAD_JOBS,
  LoadJobsCommand,
  handleLoadJobs,
} from './load-jobs'

import {
  JOBS_LOADED,
  JobsLoadedEvent,
  handleJobsLoaded,
} from './jobs-loaded'

import {
  JOBS_FAILED_TO_LOAD,
  JobsFailedToLoadEvent,
  handleJobsFailedToLoad,
} from './jobs-failed-to-load'

import {
  APPLY_FILTERS,
  ApplyFiltersCommand,
  handleApplyFilters,
} from './apply-filters'

export type Msg =
  | LoadJobsCommand
  | JobsLoadedEvent
  | JobsFailedToLoadEvent
  | ToggleDarkModeOnCommand
  | ToggleDarkModeOffCommand
  | ApplyFiltersCommand

/**
 * Updates the given state according to the given action.
 *
 * @param state - the current state of the app
 * @param action - the action to perform on the given state.
 *
 * @returns A new updated app state.
 */
export const patch = (
  state: State.State = State.create({}),
  msg: Msg
): State.State => {
  switch (msg.type) {
    case TOGGLE_DARK_MODE_ON:
      return handleToggleDarkModeOn(state)(msg)
    case TOGGLE_DARK_MODE_OFF:
      return handleToggleDarkModeOff(state)(msg)
    case LOAD_JOBS:
      return handleLoadJobs(state)(msg)
    case JOBS_LOADED:
      return handleJobsLoaded(state)(msg)
    case APPLY_FILTERS:
      return handleApplyFilters(state)(msg)
    default:
      return state
  }
}
