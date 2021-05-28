import * as Generate from './lib/generate'
import * as Repo from './lib/repository'
import * as DAO from './lib/data-access-object-interface'

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
	DAO,
}

import type { Model } from './lib/domain-entity--job'
export type { Model }
