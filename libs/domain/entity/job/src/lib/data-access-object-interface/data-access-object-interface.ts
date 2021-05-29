import * as Job from '../domain-entity--job'

/**
 * Describes a set of filters to apply to a query to the storage
 * request.
 */
export type Filters = {
  title: string
  jobType: Job.JobType | ''
  location: string
}


export const DEFAULT_FILTER: Filters
  = { title: ''
    , jobType: ''
    , location: ''
    }


/**
 * Retrieve job data from some data storage location. This could be a
 * database, a file, an API etc.
 *
 * @param pageNumber - the page we want to retrieve. 
 * @param pageSize - the number of jobs we want to retrieve.
 * @param filters - a set of filters to apply to the returned job list.
 *
 * @returns an array containing the number of jobs specified by
 * the "pageSize" attribute, starting from the given "pageNumber".
 */
export type Read = (
  pageNumber: number,
  pageSize: number,
  filters: Filters,
) => Promise<Array<Job.Model>>


/**
 * Retirive a single job from storage.
 *
 * @param id - The id of the job we want.
 * @returns the job item with the given id.
 *
 */
export type ReadJobWithId = (
  id: string
) => Promise<Job.Model>


/**
 * Create one or more data entities in storage.
 *
 * @param entities - an array of entities to create in storage.
 * @returns nothing
 */
export type Create = (
  entities: Array<Job.Model>
) => void


/**
 * Update one or more data entities in storage.
 *
 * @param entities - an array of entities to update.
 * @returns nothing
 */
export type Update = (
  entities: Array<Job.Model>
) => void


/**
 * Deletes a single job from storage.
 *
 * @param id - The id of the job we want to delete.
 * @returns nothing
 */
export type Delete = (
  id: string
) => void


export interface DAO {
  create: Create
  read: Read
  readJobWithId: ReadJobWithId
  update: Update
  delete: Delete
}

