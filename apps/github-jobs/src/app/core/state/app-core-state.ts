import * as Theme from '@shared/ui/theme'
import * as Job from '../../job'

export const MUST_LOAD_NEXT_PAGE = true
export const MUST_NOT_LOAD_NEXT_PAGE = false
export const NO_PAGE_LOADED = 0

export interface Model {
  themeScheme: Theme.ThemeScheme
  mustLoadNextPage: boolean
  currentPage: number
  jobs: Array<Job.State.Model>
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
  themeScheme = Theme.LIGHT,
  mustLoadNextPage = MUST_LOAD_NEXT_PAGE,
  currentPage = NO_PAGE_LOADED,
  jobs = [],
}: Partial<Model>): Model => ({
  themeScheme,
  mustLoadNextPage,
  currentPage,
  jobs,
})

/**
 * Get the currentPage from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * currentPage.
 *
 * @returns The currentPage from the given state model.
 */
export const getCurrentPage = (model: Model): number =>
  model.currentPage

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
export type SetCurrentPage = (v: number) => (s: Model) => Model

export const setCurrentPage: SetCurrentPage = currentPage => model => ({
  ...model,
  currentPage,
})

/**
 * Get the mustLoadNextPage from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * mustLoadNextPage.
 *
 * @returns The mustLoadNextPage from the given state model.
 */
export const getMustLoadNextPage = (model: Model): boolean =>
  model.mustLoadNextPage

/**
 * Set the mustLoadNextPage value of the given state model.
 *
 * @param mustLoadNextPage - the new value.
 *
 * @param model - the state model on which we want to set the
 * mustLoadNextPage value.
 *
 * @returns The mustLoadNextPage from the given state model.
 */
export type SetMustLoadNextPage = (v: boolean) => (s: Model) => Model

export const setMustLoadNextPage: SetMustLoadNextPage = mustLoadNextPage => model => ({
  ...model,
  mustLoadNextPage,
})

/**
 * Get the themeScheme from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * themeScheme.
 *
 * @returns The themeScheme from the given state model.
 */
export const getThemeScheme = (model: Model): Theme.ThemeScheme =>
  model.themeScheme

/**
 * Set the theme scheme of the given state model.
 *
 * @param themeScheme - the new value of the theme scheme.
 *
 * @param model - the state model on which we want to set the
 * theme scheme.
 *
 * @returns The themeScheme from the given state model.
 */
export type SetThemeScheme = (
  v: Theme.ThemeScheme
) => (s: Model) => Model

export const setThemeScheme: SetThemeScheme = themeScheme => model => ({
  ...model,
  themeScheme,
})

/**
 * Get the jobs from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * jobs.
 *
 * @returns The jobs array from the given state model.
 */
export const getJobs = (model: Model): Array<Job.State.Model> =>
  model.jobs

/**
 * Set the jobs array of the given state model.
 *
 * @param jobs - the new value of the jobs array.
 *
 * @param model - the state model on which we want to set the jobs
 * array.
 *
 * @returns The jobs array from the given state model.
 */
export type SetJobs = (v: Array<Job.State.Model>) => (s: Model) => Model

export const setJobs: SetJobs = jobs => model => ({
  ...model,
  jobs,
})
