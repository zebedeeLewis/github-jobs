import * as Job from '@libs/domain/job'

export const NO_PAGE_LOADED = 0
export const DARK_MODE_ON = true
export const DARK_MODE_OFF = false

export interface State {
  darkModeToggle: boolean
  currentPage: number
}

/**
 * Creates a new application state.
 *
 * @param - An object containing the input data for the new state
 * model.
 *
 * @returns A new state model.
 */
export const create = ({
  darkModeToggle = DARK_MODE_OFF,
  currentPage = NO_PAGE_LOADED,
}: Partial<State>): State => ({
  darkModeToggle,
  currentPage,
})

/**
 * Get the currentPage from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * currentPage.
 *
 * @returns The currentPage from the given state model.
 */
export const getCurrentPage = (state: State): number =>
  state.currentPage

/**
 * Set the currentPage value of the given state model.
 *
 * @param currentPage - the new value.
 *
 * @param model - the state model on which we want to set the
 * currentPage value.
 *
 * @returns The currentPage from the given state model.
 */
export type SetCurrentPage = (v: number) => (s: State) => State
export const setCurrentPage: SetCurrentPage = currentPage => state => ({
  ...state,
  currentPage,
})

/**
 * Get the darkModeToggle from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * darkModeToggle.
 *
 * @returns The darkModeToggle from the given state model.
 */
export const getDarkModeToggle = (model: State): boolean =>
  model.darkModeToggle

/**
 * Set the dark mode toggle state of the given state model.
 *
 * @param darkModeToggle - the new value of the dark mode toggle
 * state.
 *
 * @param model - the state model on which we want to set the
 * dark mode toggle state.
 *
 * @returns The darkModeToggle from the given state model.
 */
export type SetDarkModeToggle = (v: boolean) => (s: State) => State
export const setDarkModeToggle: SetDarkModeToggle = darkModeToggle => state => ({
  ...state,
  darkModeToggle,
})

/**
 * Determine whether the given states dark mode is toggled on.
 *
 * @param model - the state model.
 * @returns true if the dark mode is on, otherwise returns false.
 */
export const isDarkModeOn = (state: State): boolean =>
  getDarkModeToggle(state)
