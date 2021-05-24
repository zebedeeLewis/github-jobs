import * as Job from '@libs/domain/job'

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_NUMBER = 0
const DEFAULT_JOB_TYPE = Job.JobType.FULL_TIME

/** produce a list of jobs of the given job type */
export const filterByJobType = (
  jobType: Job.JobType
): Job.Repo.Transformer => {
  return Job.Repo.filter(job => job.jobType === jobType)
}

/** produce a list of jobs from the given page */
export const filterByPageNumber = (
  pageNumber: number
): Job.Repo.Transformer => {
  const pageSize = DEFAULT_PAGE_SIZE
  const start = pageNumber * pageSize

  return Job.Repo.slice(start)(pageSize)
}

/** apply a use case */
export const apply = Job.Repo.list
