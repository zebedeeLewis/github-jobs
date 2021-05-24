import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { JobComponent } from '../view-component'
import * as Job from '@libs/domain/job'

const DEFAULT_ID = `${Math.floor(Math.random() * 10) + 1}`
const DEFAULT_POST_TIME = '2011-10-05T14:48:00.000Z'
const DEFAULT_JOB_TYPE = Job.JobType.FULL_TIME
const DEFAULT_TITLE = 'No Title Provided'
const DEFAULT_COMPANY = 'No Company Provided'
const DEFAULT_LOCATION = 'No Location Provided'
const DEFAULT_AVATAR_SRC = ''

/** TODO: this function should exist in a module that has
 * the right to know about how to build app url paths. This
 * module doesn't.
 */
const pathFromId = (id: string) => `/details/${id}`

dayjs.extend(relativeTime)

export const JobContainer = ({
  id = DEFAULT_ID,
  postTime = DEFAULT_POST_TIME,
  jobType = DEFAULT_JOB_TYPE,
  title = DEFAULT_TITLE,
  company = DEFAULT_COMPANY,
  location = DEFAULT_LOCATION,
  avatarSrc = DEFAULT_AVATAR_SRC,
}: Job.Model) => {
  const displayedJobType = jobType
  const displayedPostTime = dayjs(postTime).fromNow()
  const props = {
    title,
    company,
    location,
    avatarSrc,
    postTime: displayedPostTime,
    jobType: displayedJobType,
    link: pathFromId(id),
  }

  return <JobComponent {...props} />
}
