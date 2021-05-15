import * as Theme from '@shared/ui/theme'
import * as Job from '../../job'

export interface Model {
  themeScheme: Theme.ThemeScheme
  jobs: Array<Job.State.Model>
}

/**
 * Creates a new application state.
 *
 * @param - An object containing the input data for the new state
 * model.
 *
 * @returns A new state model.
 */
export const create = ({
  themeScheme = Theme.LIGHT,
  jobs = [],
}: Partial<Model>): Model => ({
  themeScheme,
  jobs: [
    { id: 'job-1' },
    { id: 'job-2' },
    { id: 'job-3' },
    { id: 'job-4' },
    { id: 'job-5' },
    { id: 'job-6' },
    { id: 'job-7' },
    { id: 'job-8' },
  ],
})

/**
 * Get the themeScheme from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * themeScheme.
 *
 * @returns The themeScheme from the given state model.
 */
export const getThemeScheme = (model: Model): Theme.ThemeScheme =>
  model.themeScheme

/**
 * Set the theme scheme of the given state model.
 *
 * @param model - the state model on which we want to set the
 * theme scheme.
 *
 * @param themeScheme - the new value of the theme scheme.
 *
 * @returns The themeScheme from the given state model.
 */
export const setThemeScheme = (
  model: Model,
  themeScheme: Theme.ThemeScheme
): Model => ({
  ...model,
  themeScheme,
})

/**
 * Get the jobs from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * jobs.
 *
 * @returns The jobs array from the given state model.
 */
export const getJobs = (model: Model): Array<Job.State.Model> =>
  model.jobs

/**
 * Set the jobs array of the given state model.
 *
 * @param model - the state model on which we want to set the jobs
 * array.
 *
 * @param jobs - the new value of the jobs array.
 *
 * @returns The jobs array from the given state model.
 */
export const setJobs = (
  model: Model,
  jobs: Array<Job.State.Model>
): Model => ({
  ...model,
  jobs,
})
