import * as Job from '@domain/entity/job'


/** produce a list of jobs of the given job type */
type viewJobList
  =  (p: number)
  => (s: number)
  => (f: Job.DAO.Filters)
  => (r: Job.Repo.Repository)
  => Promise<Array<Job.Model>>
export const viewJobList: viewJobList
  = pageNumber => pageSize =>
    Job.Repo.list(pageNumber * pageSize)(pageSize)
