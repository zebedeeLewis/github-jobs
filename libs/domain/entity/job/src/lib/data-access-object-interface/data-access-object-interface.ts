import * as Job from '../domain-entity--job'

/**
 * Retrieves data from some data storage location. This could be a
 * database, a file, an API etc.
 *
 * @param id - The id of the job we want.
 * @param pageNumber - the page we want to retrieve. 
 * @param pageSize - the number of jobs we want to retrieve.
 *
 * @returns an array of entities of a single type. If the id is given,
 * the array will only contain the job with the matching id. If the
 * id argument is undefined, the array will contain the number of entities
 * specified by the "pageSize" attribute, starting from the given
 * "pageNumber".
 */
export type Read = (
  id: string | undefined,
  pageNumber?: number,
  pageSize?: number
) => Promise<Array<Job.Model>>

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
  update: Update
  delete: Delete
}

