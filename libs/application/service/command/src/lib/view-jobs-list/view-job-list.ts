import * as Job from '@domain/entity/job'

/** produce a list of jobs of the given job type */
export const viewJobList = async(
  pageNumber: number,
  pageSize: number,
  filters: Job.DAO.Filters,
  repo: Job.Repo.Repository,
): Promise<Array<Job.Model>> => {
  const start = pageNumber * pageSize

  return await Job.Repo.list(start, pageSize, filters, repo)
}
