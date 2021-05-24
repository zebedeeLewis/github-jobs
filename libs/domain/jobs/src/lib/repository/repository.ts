import * as Job from '../domain-jobs'

export interface Repository {
  repoType: 'JOB'
  query: string
}

/** create a new job repo */
export const create = ({
  repoType,
  query,
}: Partial<Repository>): Repository => ({
  repoType: 'JOB',
  query: '',
})

export type JobCollection = Promise<Array<Job.Model>>
export type Getter = (r: Repository) => Job.Model
export type Transformer = (r: Repository) => Repository

/** produce a list of jobs TODO!!! */
export type Lister = (r: Repository) => JobCollection
export const list: Lister = repo => {
  return Promise.resolve([Job.create({})])
}

export type FilterFn = (j: Job.Model) => boolean
/** filter the job collection TODO!!! */
type Filter = (fn: FilterFn) => Transformer
export const filter: Filter = fn => repo => {
  return {
    type: 'JOB',
    query: '',
  }
}

/** Slice the job collection TODO!!!*/
type Slicer = (s: number) => (c: number) => Transformer
export const slice: Slicer = start => count => repo => {
  return {
    type: 'JOB',
    query: '',
  }
}
