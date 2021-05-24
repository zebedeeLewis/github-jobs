const DEFAULT_ID = 'id needed'
const DEFAULT_POST_TIME = new Date(Date.now()).toISOString()
const DEFAULT_TITLE = 'No title provided'
const DEFAULT_COMPANY = 'No company name provided'
const DEFAULT_COMPANY_URL = ''
const DEFAULT_LOCATION = ''
const DEFAULT_DESCRIPTION = ''
const DEFAULT_APPLICATION_INSTRUCTION =
  '<span style="color: red">No instructions</span>'
const DEFAULT_AVATAR_SRC = ''

/**
 * What type of job. Is this a full time or part time job.
 */
export enum JobType {
  FULL_TIME = 'fullTime',
  PART_TIME = 'partTime',
}

/**
 * Represents a single job posting.
 *
 * @remarks
 * Use the long name "jobType" instead of just "type" (which would be
 * more concise and would read better when a model instance is used)
 * to prevent clash with TypeScript reserved word "type"
 */
export interface Model {
  /** Jobs unique identifier */
  id: string

  /**
   * The time the job was posted. This should be in ISO-8601 format.
   */
  postTime: string

  /**
   * The job type can be either "full time" (JobType.FULL_TIME) or
   *  "part time" (JobType.PART_TIME).
   */
  jobType: JobType

  /**
   * The job title
   */
  title: string

  /**
   * The posting company name.
   */
  company: string

  /**
   * The url to the posting companys website.
   */
  companyUrl: string

  /**
   * The location of the job opportunity.
   */
  location: string

  /**
   * The job description holds details about the job opportunity, This
   * field holds HTML values.
   */
  description: string

  /**
   * Details on how to apply to the job. This field holds HTML values.
   */
  applicationInstructions: string

  /**
   * The url to the company logo.
   */
  avatarSrc: string
}

/**
 * create a new job from the given input data.
 *
 * @param - the input data for the new job.
 *
 * @returns A new immutable job object from the given input data.
 */
export const create = ({
  id = DEFAULT_ID,
  postTime = DEFAULT_POST_TIME,
  jobType = JobType.FULL_TIME,
  title = DEFAULT_TITLE,
  company = DEFAULT_COMPANY,
  companyUrl = DEFAULT_COMPANY_URL,
  location = DEFAULT_LOCATION,
  description = DEFAULT_DESCRIPTION,
  applicationInstructions = DEFAULT_APPLICATION_INSTRUCTION,
  avatarSrc = DEFAULT_AVATAR_SRC,
}: Partial<Model>): Model =>
  Object.freeze({
    id,
    postTime,
    jobType,
    title,
    company,
    companyUrl,
    location,
    description,
    applicationInstructions,
    avatarSrc,
  })

/**
 * Get the applicationInstructions from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * applicationInstructions.
 *
 * @returns The applicationInstructions of the given job model.
 */
export const getApplicationInstructions = (model: Model): string =>
  model.applicationInstructions

/**
 * Set the applicationInstructions of the given job model.
 *
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the applicationInstructions.
 * @param applicationInstructions - the new applicationInstructions value
 *
 * @returns A new immutable job model where the "applicationInstructions" attribute
 * is set to the given value.
 */
export type SetApplicationInstructions = (
  v: string
) => (m: Model) => Model
export const setApplicationInstructions: SetApplicationInstructions = applicationInstructions => model =>
  create({
    ...model,
    applicationInstructions,
  })

/**
 * Get the description from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * description.
 *
 * @returns The description of the given job model.
 */
export const getDescription = (model: Model): string =>
  model.description

/**
 * Set the description of the given job model.
 *
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the description.
 * @param description - the new description value
 *
 * @returns A new immutable job model where the "description" attribute
 * is set to the given value.
 */
export type SetDescription = (v: string) => (m: Model) => Model
export const setDescription: SetDescription = description => model =>
  create({
    ...model,
    description,
  })

/**
 * Get the companyUrl from the given job model.
 *
 * @param model - the job model from which we want to extract the
 * companyUrl.
 *
 * @returns The companyUrl of the given job model.
 */
export const getCompanyUrl = (model: Model): string => model.companyUrl

/**
 * Set the companyUrl of the given job model.
 *
 * @remarks This function is curried
 *
 * @param model - the job model on which we want to set the companyUrl.
 * @param companyUrl - the new companyUrl value
 *
 * @returns A new immutable job model where the "companyUrl" attribute
 * is set to the given value.
 */
export type SetCompanyUrl = (v: string) => (m: Model) => Model
export const setCompanyUrl: SetCompanyUrl = companyUrl => model =>
  create({
    ...model,
    companyUrl,
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
