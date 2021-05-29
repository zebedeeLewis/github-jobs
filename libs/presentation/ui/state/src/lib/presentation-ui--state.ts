import * as _ from 'underscore'
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
type getDataValue = (d: Data<Array<Job.Model>>) => Array<Job.Model>
export const getDataValue: getDataValue
  = data => data.value


/** Set the jobData value of the given state model. */
export type setDataValue
  =  ( v: Array<Job.Model>)
  => (d: Data<Array<Job.Model>>)
  => Data<Array<Job.Model>>
export const setDataValue: setDataValue
  = value => data => ({
      ...data,
      value,
    })


/** Get the jobDataStatus from the given state model. */
type getDataStatus = (d: Data<Array<Job.Model>>) => DataStatus
export const getDataStatus: getDataStatus
  = data => data.status


/** Set the jobDataStatus value of the given state model. */
export type setDataStatus
  =  ( v: DataStatus)
  => (s: Data<Array<Job.Model>>)
  => Data<Array<Job.Model>>
export const setDataStatus: setDataStatus
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
type getPageSize = (s: State) => number
export const getPageSize: getPageSize
  = state => state.pageSize


/** Set the pageSize value of the given state model. */
export type setPageSize
  =  (v: number)
  => (s: State)
  => State
export const setPageSize: setPageSize
  = pageSize => state => ({
      ...state,
      pageSize,
    })


/** Get the jobs from the given state model. */
type getJobData = (s: State) => Data<Array<Job.Model>>
export const getJobData: getJobData
  = state => state.jobs


/** Set the jobs value of the given state model. */
export type setJobData
  =  (v: Data<Array<Job.Model>>)
  => (s: State)
  => State
export const setJobData: setJobData
  = jobs => state => ({
      ...state,
      jobs,
    })


/** Get the filters from the given state model. */
type getFilters = (s: State) => Job.DAO.Filters
export const getFilters: getFilters
  = state => state.filters


/** Set the filters value of the given state model. */
export type setFilters
  =  (v: Job.DAO.Filters)
  => (s: State)
  => State
export const setFilters: setFilters
  = filters => state => ({
      ...state,
      filters,
    })


/** Get the currentPage from the given state model. */
type getCurrentPage = (s: State) => number
export const getCurrentPage: getCurrentPage
  = state => state.currentPage


/** Set the currentPage value of the given state model. */
export type setCurrentPage
  =  (v: number)
  => (s: State)
  => State
export const setCurrentPage: setCurrentPage
  = currentPage => state => ({
      ...state,
      currentPage,
    })


/** Get the darkModeToggle from the given state model. */
type getDarkModeToggle = (s: State) => boolean
export const getDarkModeToggle: getDarkModeToggle
  = state => state.darkModeToggle


/** Set the dark mode toggle state of the given state model. */
export type setDarkModeToggle
  =  (v: boolean)
  => (s: State)
  => State
export const setDarkModeToggle: setDarkModeToggle
  = darkModeToggle => state => ({
      ...state,
      darkModeToggle,
    })


/** Determine whether the given states dark mode is toggled on. */
type isDarkModeOn = (s: State) => boolean
export const isDarkModeOn: isDarkModeOn
  = getDarkModeToggle


/** check if two values are equal */
type isEqual
  =  (a: any)
  => (b: any)
  => boolean
const isEqual: isEqual = a => b => a === b


/** Determine if the application is loading data. */
type isLoading = (s: State) => boolean
export const isLoading
  = <isLoading>_.compose(
      isEqual(LOADING),
      getDataStatus,
      getJobData
    )


/**  get the value of the job data object */
type getJobList = (s: State) => Array<Job.Model>
export const getJobList
  = <getJobList>_.compose(
      getDataValue,
      getJobData,
    )


/**  Set the value of the job data object to the given job list */
type setJobList
  =  (v: Array<Job.Model>)
  => (s: State)
  => State
export const setJobList: setJobList
  = jobs => state => setJobData(
      _.compose(
        setDataValue(jobs),
        getJobData
      )(state),
    )(state)


/**  Set the value of the job data object to the given job list */
type appendJobList
  =  (v: Array<Job.Model>)
  => (s: State)
  => State
export const appendJobList: appendJobList
  = jobs => state => setJobList(
      [...getJobList(state), ...jobs]
    )(state)


/**  Set the value of the job data object to the given job list */
type setJobStatus
  =  (v: DataStatus)
  => (s: State)
  => State
export const setJobStatus: setJobStatus
  = status => state => setJobData(
    _.compose(
        setDataStatus(status),
        getJobData
      )(state),
    )(state)
