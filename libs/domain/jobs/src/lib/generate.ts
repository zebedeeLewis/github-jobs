import * as _ from 'underscore'

import * as Job from './domain-jobs'
import { raw } from './jobs.data'

export const dataSet = (raw as unknown) as Array<Job.Model>
