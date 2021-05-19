import * as _ from 'underscore'

import * as Job from './domain-jobs'
import { raw } from './jobs.data'

type Data = {
  id: [string]
  postTime: [string]
  jobType: [string]
  title: [string]
  company: [string]
  companyUrl: [string]
  location: [string]
  description: [string]
  howToApply: [string]
  avatarSrc: [string]
}

const sampleJob = raw[0]

const rawData: Data = (raw as Array<typeof sampleJob>).reduce(
  (data: Data, job: typeof sampleJob) => {
    const keys = Object.keys(job)

    return keys.reduce(
      (_data, key) => ({
        ..._data,
        [key]: [...(_data[key] || []), job[key]],
      }),
      data
    )
  },
  ({
    id: [],
    postTime: [],
    jobType: [],
    title: [],
    company: [],
    companyUrl: [],
    location: [],
    description: [],
    howToApply: [],
    avatarSrc: [],
  } as unknown) as Data
)

export const jobsArray = (length = 10): Array<Job.Model> =>
  _.map(_.range(length), () => ({
    id: _.sample(rawData.id),
    postTime: _.sample(rawData.postTime),
    jobType: _.sample([Job.JobType.FULL_TIME, Job.JobType.PART_TIME]),
    title: _.sample(rawData.title),
    company: _.sample(rawData.company),
    companyUrl: _.sample(rawData.companyUrl),
    location: _.sample(rawData.location),
    description: _.sample(rawData.description),
    howToApply: _.sample(rawData.howToApply),
    avatarSrc: _.sample(rawData.avatarSrc),
  }))

export const dataSet = raw
