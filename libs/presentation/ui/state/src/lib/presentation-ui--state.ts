import * as Job from '@domain/entity/job'

export const NO_PAGE_LOADED = 0
export const DARK_MODE_ON = true
export const DARK_MODE_OFF = false
export const DEFAULT_PAGE_SIZE = 10

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
  value: T
}

/** Get the jobDatafrom the given state model. */
export const getJobData = (
  data: Data<Array<Job.Model>>
): Array<Job.Model> => data.value

/** Set the jobData value of the given state model. */
export type SetJobData
  =  ( v: Array<Job.Model>)
  => (d: Data<Array<Job.Model>>)
  => Data<Array<Job.Model>>
export const setJobData: SetJobData
  = value => data => ({
    ...data,
    value,
  })

/** Get the jobDataStatus from the given state model. */
export const getJobDataStatus = (
  data: Data<Array<Job.Model>>
): DataStatus => data.status

/** Set the jobDataStatus value of the given state model. */
export type SetJobDataStatus
  =  ( v: DataStatus)
  => (s: Data<Array<Job.Model>>)
  => Data<Array<Job.Model>>
export const setJobDataStatus: SetJobDataStatus
  = status => data => ({
    ...data,
    status,
  })

export type State = {
  jobs: Data<Array<Job.Model>>
  filters: Job.DAO.Filters 
  darkModeToggle: boolean
  currentPage: number
  pageSize: number
}

/**
 * Creates a new application model.
 *
 * @param - An object containing the input data for the new model.
 *
 * @returns A new state model.
 */
export const create = ({
  jobs = { status: INIT, value: [] },
  filters = Job.DAO.DEFAULT_FILTER,
  darkModeToggle = DARK_MODE_OFF,
  currentPage = NO_PAGE_LOADED,
  pageSize = DEFAULT_PAGE_SIZE,
}: Partial<State>): State => ({
  jobs,
  filters,
  darkModeToggle,
  currentPage,
  pageSize,
})

/** Get the pageSize from the given state model. */
export const getPageSize = (state: State): number =>
  state.pageSize

/** Set the pageSize value of the given state model. */
export type SetPageSize
  =  (v: number)
  => (s: State)
  => State
export const setPageSize: SetPageSize
  = pageSize => state => ({
    ...state,
    pageSize,
  })

/** Get the jobs from the given state model. */
export const getJobs = (state: State): Data<Array<Job.Model>> =>
  state.jobs

/** Set the jobs value of the given state model. */
export type SetJobs
  =  (v: Data<Array<Job.Model>>)
  => (s: State)
  => State
export const setJobs: SetJobs
  = jobs => state => ({
    ...state,
    jobs,
  })

/** Get the filters from the given state model. */
export const getFilters = (state: State): Job.DAO.Filters =>
  state.filters

/** Set the filters value of the given state model. */
export type SetFilters
  =  (v: Job.DAO.Filters)
  => (s: State)
  => State
export const setFilters: SetFilters
  = filters => state => ({
    ...state,
    filters,
  })

/** Get the currentPage from the given state model. */
export const getCurrentPage = (state: State): number =>
  state.currentPage

/** Set the currentPage value of the given state model. */
export type SetCurrentPage
  =  (v: number)
  => (s: State)
  => State
export const setCurrentPage: SetCurrentPage
  = currentPage => state => ({
    ...state,
    currentPage,
  })

/** Get the darkModeToggle from the given state model. */
export const getDarkModeToggle = (model: State): boolean =>
  model.darkModeToggle

/** Set the dark mode toggle state of the given state model. */
export type SetDarkModeToggle
  =  (v: boolean)
  => (s: State)
  => State
export const setDarkModeToggle: SetDarkModeToggle
  = darkModeToggle => state => ({
    ...state,
    darkModeToggle,
  })

/** Determine whether the given states dark mode is toggled on. */
export const isDarkModeOn = (state: State): boolean =>
  getDarkModeToggle(state)

/** Determine if the application is loading data. */
export const isLoading = (state: State): boolean =>
  getJobDataStatus(getJobs(state)) === LOADING
