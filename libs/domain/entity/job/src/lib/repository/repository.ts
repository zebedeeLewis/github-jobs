import * as Job from '../domain-entity--job'
import * as DAO from '../data-access-object-interface'

/*
export interface FilterSpec {
  id: string
  jobType: Job.JobType
  location: string
  searchTerm: string
}
*/


export interface Repository {
  query: string
  dao?: DAO.DAO
}


/** create a new job repo */
export const create = ({
  query = '',
  dao = undefined,
}: Partial<Repository>): Repository => Object.freeze({
  query,
  dao,
})


/** Get the dao from the given job model.*/
type getDao = (r: Repository) => DAO.DAO
export const getDao: getDao
  = repo => repo.dao


/** Set the dao of the given job model. */
export type setDao
  =  (v: DAO.DAO)
  => (r: Repository)
  => Repository
export const setDao: setDao
  = dao => repo => create({
      ...repo,
      dao,
    })


/** Get the query from the given job model.*/
type getQuery = (r: Repository) => string
export const getQuery: getQuery
  = repo => repo.query


/** Set the query of the given job model. */
export type setQuery
  =  (v: string)
  => (r: Repository)
  => Repository
export const setQuery: setQuery
  = query => repo => create({
      ...repo,
      query,
    })


/** produce a list of jobs TODO!!! */
type list
  =  (s: number)
  => (c: number)
  => (f: DAO.Filters)
  => (r: Repository)
  => Promise<Array<Job.Model>>
export const list: list
  = start => count => filters => repo =>
    repo.dao.read(start, count, filters)

