import * as filterJobs from '@libs/use-case/filter-jobs'

import logo from '../../logo.svg'

export enum JobType {
  FULL_TIME = 'fullTime',
  PART_TIME = 'partTime',
}

/**
 * Produces the string representation of the given job type.
 *
 * @param jobType - the job type
 * @returns a string representation of the given job type.
 */
export const jobTypeToString = (jobType: JobType): string => {
  switch (jobType) {
    case JobType.FULL_TIME:
      return 'Full Time'
    case JobType.PART_TIME:
      return 'Part Time'
    default:
      return 'Unsupported Job Type'
  }
}

export interface Model {
  id: string
  postTime: string
  jobType: JobType
  title: string
  company: string
  location: string
  avatarSrc: string
  filters?: filterJobs.JobFilter
}

/**
 * create a new job from the given input data. The input data
 * must be complete since our app does not create new jobs, i
 * only displays jobs from github.
 *
 * @param - the input data for the new job.
 * @returns A new job from the given input data.
 */
export const create = ({
  id,
  postTime,
  jobType,
  title,
  company,
  location,
  avatarSrc,
  filters,
}: Model): Model => ({
  id,
  postTime,
  jobType,
  title,
  company,
  location,
  avatarSrc,
  filters: filters || filterJobs.create({}),
})

/**
 * Get the filters from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * filters.
 *
 * @returns The filters of the given job model.
 */
export const getFilters = (model: Model): filterJobs.JobFilter =>
  model.filters

/**
 * Set the filters of the given job model.
 *
 * @param model - the job model on which we want to set the filters.
 *
 * @param filters - the new filters value
 *
 * @returns The filters from the given job model.
 */
export const setFilters = (
  model: Model,
  filters: filterJobs.JobFilter
): Model => ({
  ...model,
  filters,
})

/**
 * Get the avatarSrc from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * avatarSrc.
 *
 * @returns The avatarSrc of the given job model.
 */
export const getAvatarSrc = (model: Model): string => model.avatarSrc

/**
 * Set the avatarSrc of the given job model.
 *
 * @param model - the job model on which we want to set the avatarSrc.
 *
 * @param avatarSrc - the new avatarSrc value
 *
 * @returns The avatarSrc from the given job model.
 */
export const setAvatarSrc = (
  model: Model,
  avatarSrc: string
): Model => ({
  ...model,
  avatarSrc,
})

/**
 * Get the location from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * location.
 *
 * @returns The location of the given job model.
 */
export const getLocation = (model: Model): string => model.location

/**
 * Set the location of the given job model.
 *
 * @param model - the job model on which we want to set the location.
 *
 * @param location - the new location value
 *
 * @returns The location from the given job model.
 */
export const setLocation = (model: Model, location: string): Model => ({
  ...model,
  location,
})

/**
 * Get the company from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * company.
 *
 * @returns The company of the given job model.
 */
export const getCompany = (model: Model): string => model.company

/**
 * Set the company of the given job model.
 *
 * @param model - the job model on which we want to set the company.
 *
 * @param company - the new company value
 *
 * @returns The company from the given job model.
 */
export const setCompany = (model: Model, company: string): Model => ({
  ...model,
  company,
})

/**
 * Get the title from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * title.
 *
 * @returns The title of the given job model.
 */
export const getTitle = (model: Model): string => model.title

/**
 * Set the title of the given job model.
 *
 * @param model - the job model on which we want to set the title.
 *
 * @param title - the new title value
 *
 * @returns The title from the given job model.
 */
export const setTitle = (model: Model, title: string): Model => ({
  ...model,
  title,
})

/**
 * Get the jobType from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * jobType.
 *
 * @returns The jobType of the given job model.
 */
export const getType = (model: Model): JobType => model.jobType

/**
 * Set the jobType of the given job model.
 *
 * @param model - the job model on which we want to set the jobType.
 *
 * @param jobType - the new jobType value
 *
 * @returns The jobType from the given job model.
 */
export const setType = (model: Model, jobType: JobType): Model => ({
  ...model,
  jobType,
})

/**
 * Get the postTime from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * postTime.
 *
 * @returns The postTime of the given job model.
 */
export const getPostTime = (model: Model): string => model.postTime

/**
 * Set the postTime of the given job model.
 *
 * @param model - the job model on which we want to set the postTime.
 *
 * @param postTime - the new postTime value
 *
 * @returns The postTime from the given job model.
 */
export const setPostTime = (model: Model, postTime: string): Model => ({
  ...model,
  postTime,
})

/**
 * Get the id from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * id.
 *
 * @returns The id of the given job model.
 */
export const getId = (model: Model): string => model.id

/**
 * Set the id of the given job model.
 *
 * @param model - the job model on which we want to set the id.
 *
 * @param id - the new id value
 *
 * @returns The id from the given job model.
 */
export const setId = (model: Model, id: string): Model => ({
  ...model,
  id,
})

export const sampleJobs = [
  create({
    id: 'job-11',
    title: 'Senior Software Engineer',
    company: 'So Digital Inc.',
    jobType: JobType.FULL_TIME,
    postTime: '2021-05-15T12:36:00.000Z',
    location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco',
    avatarSrc: logo,
  }),
  create({
    id: 'job-2',
    title: 'Haskell and PureScript Dev',
    company: 'National Wildlife',
    jobType: JobType.PART_TIME,
    postTime: '2021-01-05T14:48:00.000Z',
    location: 'Columbus, OH',
    avatarSrc: logo,
  }),
  create({
    id: 'job-3',
    title: 'Midlevel Back End Engineer',
    company: 'Photosnap Ltd.',
    jobType: JobType.PART_TIME,
    postTime: '2011-10-05T14:48:00.000Z',
    location: 'Russia',
    avatarSrc: logo,
  }),
  create({
    id: 'job-4',
    title: 'Senior Application Engineer',
    company: 'Extreme Division',
    jobType: JobType.FULL_TIME,
    postTime: '2011-10-05T14:48:00.000Z',
    location: 'Anywhere',
    avatarSrc: logo,
  }),
  create({
    id: 'job-5',
    title: 'Remote DevOps Engineer',
    company: 'Multifold',
    jobType: JobType.PART_TIME,
    postTime: '2011-10-05T14:48:00.000Z',
    location: 'Berlin',
    avatarSrc: logo,
  }),
  create({
    id: 'job-6',
    title: 'Desktop Support Manager',
    company: 'Hardsoft Computing',
    jobType: JobType.PART_TIME,
    postTime: '2011-10-05T14:48:00.000Z',
    location: 'Columbus, OH',
    avatarSrc: logo,
  }),
  create({
    id: 'job-7',
    title: 'iOS Engineer',
    company: 'Blacksoft',
    jobType: JobType.FULL_TIME,
    postTime: '2011-10-05T14:48:00.000Z',
    location: 'Columbus, OH',
    avatarSrc: logo,
  }),
  create({
    id: 'job-8',
    title: 'Senior EJB Developer',
    company: 'Color Logic',
    jobType: JobType.FULL_TIME,
    postTime: '2011-10-05T14:48:00.000Z',
    location: 'Toronto, Ontario - Remote',
    avatarSrc: logo,
  }),
] as Array<Model>
