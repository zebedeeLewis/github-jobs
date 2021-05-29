import * as Job from '../domain-entity--job'
import * as DAO from '../data-access-object-interface'

export interface FilterSpec {
  id: string
  jobType: Job.JobType
  location: string
  searchTerm: string
}

export interface Repository {
  repoType: 'JOB'
  query: string
  dao?: DAO.DAO
}

/** create a new job repo */
export const create = ({
  repoType = 'JOB',
  query = '',
  dao = undefined,
}: Partial<Repository>): Repository => Object.freeze({
  repoType,
  query,
  dao,
})

/** Get the dao from the given job model.*/
export const getDao = (repo: Repository): DAO.DAO =>
  repo.dao

/** Set the dao of the given job model. */
export type SetDao
  =  (v: DAO.DAO)
  => (r: Repository)
  => Repository
export const setDao: SetDao
  = dao => repo => create({
    ...repo,
    dao,
  })

/** Get the query from the given job model.*/
export const getQuery = (repo: Repository): string =>
  repo.query

/** Set the query of the given job model. */
export type SetQuery
  =  (v: string)
  => (r: Repository)
  => Repository
export const setQuery: SetQuery
  = query => repo => create({
    ...repo,
    query,
  })

/** Get the repoType from the given job model.*/
export const getRepoType = (repo: Repository): 'JOB' =>
  repo.repoType

/** Set the repoType of the given job model. */
export type SetRepoType
  =  (v: 'JOB')
  => (r: Repository)
  => Repository
export const setRepoType: SetRepoType
  = repoType => repo => create({
    ...repo,
    repoType,
  })

/** produce a list of jobs TODO!!! */
export const list = async (
  start: number,
  count: number,
  filters: DAO.Filters,
  repo: Repository,
): Promise<Array<Job.Model>> => {
  return await repo.dao.read(start, count, filters)
}

