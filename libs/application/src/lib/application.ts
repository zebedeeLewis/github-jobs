import * as Job from '@libs/domain/job'

export type Model = {
  repos: { job: Job.Repo.Repository }
  filters: Job.Repo.Lister
}

/**
 * Creates a new application model.
 *
 * @param - An object containing the input data for the new model.
 *
 * @returns A new state model.
 */
export const create = ({
  repos = { job: Job.Repo.create({}) },
  filters = Job.Repo.list,
}: Partial<Model>): Model => ({
  repos,
  filters,
})

/**
 * Get the repos from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * repo.
 *
 * @returns The repo from the given state model.
 */
export const getRepos = (model: Model): { job: Job.Repo.Repository } =>
  model.repos

/**
 * Set the repo value of the given state model.
 *
 * @param repos - the new value.
 *
 * @param model - the state model on which we want to set the
 * repo value.
 *
 * @returns The repo from the given state model.
 */
export type SetRepos = (v: {
  job: Job.Repo.Repository
}) => (s: Model) => Model
export const setRepos: SetRepos = repos => model => ({
  ...model,
  repos,
})

/**
 * Get the filters from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * filters.
 *
 * @returns The filters from the given state model.
 */
export const getFilters = (model: Model): Job.Repo.Lister =>
  model.filters

/**
 * Set the filters value of the given state model.
 *
 * @param filters - the new value.
 *
 * @param model - the state model on which we want to set the
 * filters value.
 *
 * @returns The filters from the given state model.
 */
export type SetFilters = (v: Job.Repo.Lister) => (s: Model) => Model
export const setFilters: SetFilters = filters => model => ({
  ...model,
  filters,
})
