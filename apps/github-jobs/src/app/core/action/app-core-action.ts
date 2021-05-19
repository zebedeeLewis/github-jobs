import * as _ from 'underscore'

import * as State from '../state'
import * as Job from '@libs/domain/job'

type Filters = {
  fullTimeOnly: boolean
  location: string
  title: string
}

/**
 * Represents all supported redux action type.
 */
export enum Type {
  TOGGLE_DARK_MODE_ON = 'TOGGLE_DARK_MODE_ON',
  TOGGLE_DARK_MODE_OFF = 'TOGGLE_DARK_MODE_OFF',
  UPDATE_JOBS = 'UPDATE_JOBS',
  LOAD_NEXT_PAGE = 'LOAD_NEXT_PAGE',
  UPDATE_FILTERS = 'UPDATE_FILTERS',
  APPLY_FILTERS = 'APPLY_FILTERS',
}

/**
 * Describes a redux action intended to apply the active filters
 */
export interface ApplyFilters {
  type: Type.APPLY_FILTERS
}

/**
 * Describes a redux action intended to update the active filters
 */
export interface UpdateFilters {
  type: Type.UPDATE_FILTERS
  payload: Filters
}

/**
 * Describes a redux action intended to load a new page from the
 * api
 */
export interface LoadNextPage {
  type: Type.LOAD_NEXT_PAGE
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
  payload: Array<Job.Model>
}

/**
 * Represents the valid redux actions for the application state.
 */
export type Model =
  | ToggleDarkModeOn
  | ToggleDarkModeOff
  | UpdateJobs
  | LoadNextPage
  | UpdateFilters
  | ApplyFilters

/**
 * Create a new LoadNextPage action
 *
 * @returns A new LoadNextPage action.
 */
export const loadNextPage = (): LoadNextPage => ({
  type: Type.LOAD_NEXT_PAGE,
})

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
export const updateJobs = (jobs: Array<Job.Model>): UpdateJobs => ({
  type: Type.UPDATE_JOBS,
  payload: jobs,
})

/**
 * Create a new UpdateFilters action
 *
 * @returns A new UpdateFilters action with the given Filters
 */
export const updateFilters = (filters: Filters): UpdateFilters => ({
  type: Type.UPDATE_FILTERS,
  payload: filters,
})

/**
 * Create a new ApplyFilters action
 *
 * @returns A new ApplyFilters action
 */
export const applyFilters = (): ApplyFilters => ({
  type: Type.APPLY_FILTERS,
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
  const currentFilters = State.getFilters(state)

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
    case Type.LOAD_NEXT_PAGE:
      return State.setPageLoad(State.PageLoad.REQUESTED)(state)
    case Type.UPDATE_FILTERS:
      return State.setFilters({ ...currentFilters, ...action.payload })(
        state
      )
    case Type.APPLY_FILTERS:
      return _.compose(
        State.setCurrentPage(0),
        State.setPageLoad(State.PageLoad.REQUESTED)
      )(state)
    default:
      return state
  }
}
