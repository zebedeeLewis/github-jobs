export const NOT_FOUND_PAGE_ROUTE = '/*'
export const DETAILS_PAGE_ROUTE = '/details/:id'
export const HOME_PAGE_ROUTE = '/'

/**
 * produce the path to the details page of the job corresponding
 * to the given id.
 *
 * @param id - the job id
 * @returns the path to the given job details page.
 */
export const pathFromId = (id: string) => `/details/${id}`
