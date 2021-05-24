import * as Job from '@libs/domain/job'

export const NO_PAGE_LOADED = 0
export const DARK_MODE_ON = true
export const DARK_MODE_OFF = false

export const INIT = 'INIT'
export const LOADING = 'LOADING'
export const LOADING_DONE = 'LOADING_DONE'
export const LOADING_FAILED = 'LOADING_FAILED'

export type DataStatus =
  | typeof INIT
  | typeof LOADING
  | typeof LOADING_DONE
  | typeof LOADING_FAILED

export type Data<T> = {
  status: DataStatus
  data: T
}

/**
 * Get the jobDatafrom the given state model.
 *
 * @param state - the state model from which we want to extract the
 * jobData.
 *
 * @returns The jobData from the given state model.
 */
export const getJobData = (
  data: Data<Array<Job.Model>>
): Array<Job.Model> => data.data

/**
 * Set the jobData value of the given state model.
 *
 * @param jobData - the new value.
 *
 * @param state - the state model on which we want to set the
 * jobData value.
 *
 * @returns The jobData from the given state model.
 */
export type SetJobData = (
  v: Array<Job.Model>
) => (d: Data<Array<Job.Model>>) => Data<Array<Job.Model>>
export const setJobData: SetJobData = value => data => ({
  ...data,
  value,
})

/**
 * Get the jobDataStatus from the given state model.
 *
 * @param state - the state model from which we want to extract the
 * jobDataStatus.
 *
 * @returns The jobDataStatus from the given state model.
 */
export const getJobDataStatus = (
  data: Data<Array<Job.Model>>
): DataStatus => data.status

/**
 * Set the jobDataStatus value of the given state model.
 *
 * @param jobDataStatus - the new value.
 *
 * @param state - the state model on which we want to set the
 * jobDataStatus value.
 *
 * @returns The jobDataStatus from the given state model.
 */
export type SetJobDataStatus = (
  v: DataStatus
) => (s: Data<Array<Job.Model>>) => Data<Array<Job.Model>>
export const setJobDataStatus: SetJobDataStatus = status => data => ({
  ...data,
  status,
})

export type State = {
  jobs: Data<Array<Job.Model>>
  filters: Job.Repo.Lister
  darkModeToggle: boolean
  currentPage: number
}

/**
 * Creates a new application model.
 *
 * @param - An object containing the input data for the new model.
 *
 * @returns A new state model.
 */
export const create = ({
  jobs = { status: INIT, data: [] },
  filters = Job.Repo.list,
  darkModeToggle = DARK_MODE_OFF,
  currentPage = NO_PAGE_LOADED,
}: Partial<State>): State => ({
  jobs,
  filters,
  darkModeToggle,
  currentPage,
})

/**
 * Get the jobs from the given state model.
 *
 * @param state - the state model from which we want to extract the
 * jobs.
 *
 * @returns The jobs from the given state model.
 */
export const getJobs = (state: State): Data<Array<Job.Model>> =>
  state.jobs

/**
 * Set the jobs value of the given state model.
 *
 * @param jobs - the new value.
 *
 * @param state - the state model on which we want to set the
 * jobs value.
 *
 * @returns The jobs from the given state model.
 */
export type SetJobs = (v: Data<Array<Job.Model>>) => (s: State) => State
export const setJobs: SetJobs = jobs => state => ({
  ...state,
  jobs,
})

/**
 * Get the filters from the given state model.
 *
 * @param state - the state model from which we want to extract the
 * filters.
 *
 * @returns The filters from the given state model.
 */
export const getFilters = (state: State): Job.Repo.Lister =>
  state.filters

/**
 * Set the filters value of the given state model.
 *
 * @param filters - the new value.
 *
 * @param state - the state model on which we want to set the
 * filters value.
 *
 * @returns The filters from the given state model.
 */
export type SetFilters = (v: Job.Repo.Lister) => (s: State) => State
export const setFilters: SetFilters = filters => state => ({
  ...state,
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

/**
 * Determine if the application is loading data.
 */
export const isLoading = (state: State): boolean =>
  getJobDataStatus(getJobs(state)) === LOADING
