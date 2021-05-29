import { patch } from './lib/presentation-ui--message'

import type { Msg } from './lib/presentation-ui--message'

import {
  LOAD_JOBS,
  loadJobs,
} from './lib/load-jobs'

import type {
  LoadJobsCommand,
} from './lib/load-jobs'

import {
  TOGGLE_DARK_MODE_ON,
  toggleDarkModeOn,
} from './lib/toggle-dark-mode-on'

import {
  APPLY_FILTERS,
  applyFilters,
} from './lib/apply-filters'

import {
  TOGGLE_DARK_MODE_OFF,
  toggleDarkModeOff,
} from './lib/toggle-dark-mode-off'

import {
  jobsLoaded,
} from './lib/jobs-loaded'

import {
  jobsFailedToLoad,
} from './lib/jobs-failed-to-load'

export {
  LOAD_JOBS,
  TOGGLE_DARK_MODE_ON,
  TOGGLE_DARK_MODE_OFF,
  APPLY_FILTERS,
  patch,
  loadJobs,
  toggleDarkModeOn,
  applyFilters,
  toggleDarkModeOff,
  jobsLoaded,
  jobsFailedToLoad,
}

export type {Msg, LoadJobsCommand}

