import logo from './logo.svg'

export enum JobType {
  FULL_TIME = 'fullTime',
  PART_TIME = 'partTime',
}

/**
 * @remarks
 * Use the long name "jobType" instead of just "type" (which would be
 * more concise and would read better when a model instance is used)
 * to prevent clash with TypeScript reserved word "type"
 */
export interface Model {
  id: string
  postTime: string
  jobType: JobType
  title: string
  company: string
  location: string
  avatarSrc: string
}

/**
 * create a new job from the given input data. The input data
 * must be complete since our app does not create new jobs, it
 * only displays jobs from a repository.
 *
 * @param - the input data for the new job.
 *
 * @returns A new immutable job object from the given input data.
 */
export const create = ({
  id,
  postTime,
  jobType,
  title,
  company,
  location,
  avatarSrc,
}: Model): Model =>
  Object.freeze({
    id,
    postTime,
    jobType,
    title,
    company,
    location,
    avatarSrc,
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
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the avatarSrc.
 * @param avatarSrc - the new avatarSrc value
 *
 * @returns A new immutable job model where the "avatarSrc" attribute
 * is set to the given value.
 */
export type SetAvatarSrc = (v: string) => (m: Model) => Model
export const setAvatarSrc: SetAvatarSrc = avatarSrc => model =>
  create({
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
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the location.
 * @param location - the new location value
 *
 * @returns A new immutable job model where the "location" attribute
 * is set to the given value.
 */
export type SetLocation = (v: string) => (m: Model) => Model
export const setLocation: SetLocation = location => model =>
  create({
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
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the company.
 * @param company - the new company value
 *
 * @returns A new immutable job model where the "company" attribute
 * is set to the given value.
 */
export type SetCompany = (v: string) => (m: Model) => Model
export const setCompany: SetCompany = company => model =>
  create({
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
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the title.
 * @param title - the new title value
 *
 * @returns A new immutable job model where the "title" attribute
 * is set to the given value.
 */
export type SetTitle = (v: string) => (m: Model) => Model
export const setTitle: SetTitle = title => model =>
  create({
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
export const getJobType = (model: Model): JobType => model.jobType

/**
 * Set the jobType of the given job model.
 *
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the jobType.
 * @param jobType - the new jobType value
 *
 * @returns A new immutable job model where the "jobType" attribute
 * is set to the given value.
 */
export type SetJobType = (v: JobType) => (m: Model) => Model
export const setJobType: SetJobType = jobType => model =>
  create({
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
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the postTime.
 * @param postTime - the new postTime value
 *
 * @returns A new immutable job model where the "postTime" attribute
 * is set to the given value.
 */
export type SetPostTime = (v: string) => (m: Model) => Model
export const setPostTime: SetPostTime = postTime => model =>
  create({
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
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the id.
 * @param id - the new id value
 *
 * @returns A new immutable job model where the "id" attribute
 * is set to the given value.
 */
export type SetId = (v: string) => (m: Model) => Model
export const setId: SetId = id => model =>
  create({
    ...model,
    id,
  })

export const sampleJobs = [
  create({
    id: 'job-1',
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
