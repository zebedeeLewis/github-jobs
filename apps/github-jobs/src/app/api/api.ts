import * as Job from '@libs/domain/job'
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
 * Retrieve a page of jobs from the remote api.
 *
 * @param currentPage - the page number of the page that was last loaded.
 *
 * @returns a promise wrapping an array of object literals each containing
 * the data for a single job posting.
 */
export const getPage = async (
  currentPage: number
): Promise<Array<Job.Model>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Job.Generate.dataSet)
    }, 5000)
  })
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
): Promise<Array<Job.Model>> => {
  const nextPage = App.State.getCurrentPage(appState) + 1

  return getPage(nextPage)
}
