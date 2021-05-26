import * as Generate from './lib/generate'
import * as Repo from './lib/repository'

import {
  JobType,
  getId,
  setId,
  getPostTime,
  setPostTime,
  getJobType,
  setJobType,
  getTitle,
  setTitle,
  getCompany,
  setCompany,
  getLocation,
  setLocation,
  getAvatarSrc,
  setAvatarSrc,
  getApplicationInstructions,
  setApplicationInstructions,
  getDescription,
  setDescription,
  getCompanyUrl,
  setCompanyUrl,
  create,
} from './lib/domain-entity--job'

export {
  JobType,
  getId,
  setId,
  getPostTime,
  setPostTime,
  getJobType,
  setJobType,
  getTitle,
  setTitle,
  getCompany,
  setCompany,
  getLocation,
  setLocation,
  getAvatarSrc,
  setAvatarSrc,
  getApplicationInstructions,
  setApplicationInstructions,
  getDescription,
  setDescription,
  getCompanyUrl,
  setCompanyUrl,
  create,
  Generate,
  Repo,
}

import type { Model } from './lib/domain-entity--job'

export type { Model }
