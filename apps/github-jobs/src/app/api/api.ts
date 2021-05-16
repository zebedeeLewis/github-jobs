import * as Job from '../job'
import * as App from '../core'

/**
 * Describes the format that the jobs API uses to send data about a
 * single job.
 */
export interface DTO {
  id: string
  type: string
  url: string
  created_at: string
  company: string
  company_url: string
  company_logo: string
  location: string
  title: string
  description: string
  how_to_apply: string
}

/**
 * Maps an api DTO to a jobs model.
 */
export const dtoToJob = ({
  id,
  type,
  created_at,
  company,
  company_logo,
  location,
  title,
}: DTO): Job.State.Model => {
  return {
    id,
    title,
    company,
    location,
    postTime: created_at,
    jobType:
      type === 'Full Time'
        ? Job.State.JobType.FULL_TIME
        : Job.State.JobType.PART_TIME,
    avatarSrc: company_logo || '',
  }
}

/**
 * Retrieve a page of jobs from the remote api.
 *
 * @param currentPage - the page number of the page that was last loaded.
 *
 * @returns a promise wrapping an array of object literals each containing
 * the data for a single job posting.
 */
export const getPage = async (
  currentPage: number
): Promise<Array<Job.State.Model>> => {
  return Job.State.sampleJobs
}

/**
 * Retrieve the next page to be loaded according to the given app state.
 *
 * @param appState - the app state
 *
 * @returns a promise wrapping an array of object literals each
 * containing the data for a single job posting.
 */
export const getNextPage = async (
  appState: App.State.Model
): Promise<Array<Job.State.Model>> => {
  const nextPage = App.State.getCurrentPage(appState) + 1

  return getPage(nextPage)
}
