import * as Job from '../domain-jobs'
import * as Query from './query'

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
export type Lister = (r: Repository) => JobCollection
export const list: Lister = repo => {
  return Promise.resolve([Job.create({})])
}

/** filter the job collection TODO!!! */
type Filter = (fn: FilterSpec) => Transformer
export const filter: Filter = filterSpec => repo => {
  return create({})
}

/** Slice the job collection TODO!!!*/
type Slicer = (s: number) => (c: number) => Transformer
export const slice: Slicer = start => count => repo => {
  return create({})
}
