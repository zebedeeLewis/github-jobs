import * as Job from '@libs/domain/job'

export const NO_PAGE_LOADED = 0
export const DARK_MODE_ON = true
export const DARK_MODE_OFF = false

export enum PageLoad {
  REQUESTED = 'REQUESTED',
  LOADING = 'LOADING',
  NONE_LOADED = 'NONE_LOADED',
  LOADED = 'LOADED',
}

type Filters = {
  fullTimeOnly: boolean
  location: string
  title: string
}

export interface Model {
  darkModeToggle: boolean
  pageLoad: PageLoad
  currentPage: number
  jobs: Array<Job.Model>
  filters: Filters
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
  pageLoad = PageLoad.NONE_LOADED,
  currentPage = NO_PAGE_LOADED,
  jobs = [],
  filters = {
    fullTimeOnly: false,
    location: '',
    title: '',
  },
}: Partial<Model>): Model => ({
  darkModeToggle,
  pageLoad,
  currentPage,
  jobs,
  filters,
})

/**
 * Get the filters from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * filters.
 *
 * @returns The filters from the given state model.
 */
export const getFilters = (model: Model): Filters => model.filters

/**
 * Set the filters value of the given state model.
 *
 * @param filters - the new value.
 *
 * @param model - the state model on which we want to set the
 * filters value.
 *
 * @returns The filters from the given state model.
 */
export type SetFilters = (v: Filters) => (s: Model) => Model

export const setFilters: SetFilters = filters => model => ({
  ...model,
  filters,
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
 * Get the pageLoad from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * pageLoad.
 *
 * @returns The pageLoad from the given state model.
 */
export const getPageLoad = (model: Model): PageLoad => model.pageLoad

/**
 * Set the pageLoad value of the given state model.
 *
 * @param pageLoad - the new value.
 *
 * @param model - the state model on which we want to set the
 * pageLoad value.
 *
 * @returns The pageLoad from the given state model.
 */
export type SetPageLoad = (v: PageLoad) => (s: Model) => Model

export const setPageLoad: SetPageLoad = pageLoad => model => ({
  ...model,
  pageLoad,
})

/**
 * Get the darkModeToggle from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * darkModeToggle.
 *
 * @returns The darkModeToggle from the given state model.
 */
export const getDarkModeToggle = (model: Model): boolean =>
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
export type SetDarkModeToggle = (v: boolean) => (s: Model) => Model

export const setDarkModeToggle: SetDarkModeToggle = darkModeToggle => model => ({
  ...model,
  darkModeToggle,
})

/**
 * Get the jobs from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * jobs.
 *
 * @returns The jobs array from the given state model.
 */
export const getJobs = (model: Model): Array<Job.Model> => model.jobs

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
export type SetJobs = (v: Array<Job.Model>) => (s: Model) => Model

export const setJobs: SetJobs = jobs => model => ({
  ...model,
  jobs,
})

/**
 * Determine whether the given states dark mode is toggled on.
 *
 * @param model - the state model.
 * @returns true if the dark mode is on, otherwise returns false.
 */
export const isDarkModeOn = (model: Model): boolean =>
  getDarkModeToggle(model)

/**
 * Determine if a page should be loaded.
 *
 * @param model - the state model.
 * @returns true if the page load state is "REQUESTED" or "NONE_LOADED".
 * Otherwise, it returns false.
 */
export const isLoadNeeded = (model: Model): boolean =>
  getPageLoad(model) === PageLoad.NONE_LOADED ||
  getPageLoad(model) === PageLoad.REQUESTED

/**
 * Determine if jobs are currently being loaded from the api.
 *
 * @param model - the state model.
 * @returns true if the page load state is "LOADING". Otherwise, it
 * returns false.
 */
export const isLoadingJobs = (model: Model): boolean =>
  getPageLoad(model) === PageLoad.REQUESTED
