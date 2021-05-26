import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { JobCardComponent } from './job-card-component'
import * as Job from '@domain/entity/job'
import * as Utils from '@presentation/ui/utils'

const DEFAULT_ID = `${Math.floor(Math.random() * 10) + 1}`
const DEFAULT_POST_TIME = '2011-10-05T14:48:00.000Z'
const DEFAULT_JOB_TYPE = Job.JobType.FULL_TIME
const DEFAULT_TITLE = 'No Title Provided'
const DEFAULT_COMPANY = 'No Company Provided'
const DEFAULT_LOCATION = 'No Location Provided'
const DEFAULT_AVATAR_SRC = ''

dayjs.extend(relativeTime)

export const JobCardContainer = ({
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
    link: Utils.pathFromId(id),
  }

  return <JobCardComponent {...props} />
}
