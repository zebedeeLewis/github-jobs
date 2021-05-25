import * as Job from '../domain-jobs'
import * as Query from './query'
import * as App from '@libs/application'

export interface FilterSpec {
  id: string
  jobType: Job.JobType
  location: string
  searchTerm: string
}

export interface Repository {
  repoType: 'JOB'
  query: string
}

/** create a new job repo */
export const create = ({
  repoType = 'JOB',
  query = '',
}: Partial<Repository>): Repository => ({
  repoType,
  query,
})

export type JobCollection = Promise<Array<Job.Model>>
export type Getter = (r: Repository) => Job.Model
export type Transformer = (r: Repository) => Repository

/** produce a list of jobs TODO!!! */
export const list = async (
	start: number,
	count: number,
	repo: Repository,
): Promise<Array<Job.Model>> => {

  return await repo.dao.read()
}
