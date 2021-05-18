export interface JobFilter {
  location: string
  fullTimeOnly: boolean
  searchTerm: string
}

/**
 * Create a new job filter.
 *
 * @param input - the values for the filter.
 *
 * @returns a new "immutable" job filter object.
 */
export const create = ({
  location = '',
  fullTimeOnly = false,
  searchTerm = '',
}: Partial<JobFilter>): JobFilter =>
  Object.freeze({
    location,
    fullTimeOnly,
    searchTerm,
  })

/**
 * Get the given job filter "searchTerm" attribute.
 *
 * @param jobFilter - the job filter
 * @returns the value of the searchTerm attribute of the given job
 * filter.
 */
export const getSearchTerm = (jobFilter: JobFilter): string =>
  jobFilter.searchTerm

/**
 * Set the given job filters "searchTerm" attribute.
 *
 * @remarks all attributes are curried.
 *
 * @param searchTerm - the new searchTerm value.
 * @param jobFilter - the job filter to update.
 *
 * @returns a new immutable job filter object where the value of the
 * searchTerm attribute is set to the given value.
 */
export type SetSearchTerm = (v: string) => (f: JobFilter) => JobFilter
export const setsearchTerm: SetSearchTerm = searchTerm => jobFilter =>
  create({
    ...jobFilter,
    searchTerm,
  })

/**
 * Get the given job filter "fullTimeOnly" attribute.
 *
 * @param jobFilter - the job filter
 * @returns the value of the fullTimeOnly attribute of the given job
 * filter.
 */
export const getFullTimeOnly = (jobFilter: JobFilter): boolean =>
  jobFilter.fullTimeOnly

/**
 * Set the given job filters "fullTimeOnly" attribute.
 *
 * @remarks all attributes are curried.
 *
 * @param fullTimeOnly - the new fullTimeOnly value.
 * @param jobFilter - the job filter to update.
 *
 * @returns a new immutable job filter object where the value of the
 * fullTimeOnly attribute is set to the given value.
 */
export type SetFullTimeOnly = (
  v: boolean
) => (f: JobFilter) => JobFilter
export const setFullTimeOnly: SetFullTimeOnly = fullTimeOnly => jobFilter =>
  create({
    ...jobFilter,
    fullTimeOnly,
  })

/**
 * Get the given job filter "location".
 *
 * @param jobFilter - the job filter
 * @returns the value of the location attribute of the given job filter.
 */
export const getLocation = (jobFilter: JobFilter): string =>
  jobFilter.location

/**
 * Set the given job filters "location".
 *
 * @remarks all attributes are curried.
 *
 * @param location - the new location value.
 * @param jobFilter - the job filter to update.
 *
 * @returns a new immutable job filter object where the value of the
 * location attribute is set to the given value.
 */
export type SetLocation = (v: string) => (f: JobFilter) => JobFilter
export const setLocation: SetLocation = location => jobFilter =>
  create({
    ...jobFilter,
    location,
  })
