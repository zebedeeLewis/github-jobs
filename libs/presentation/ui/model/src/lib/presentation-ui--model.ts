import * as Job from '@domain/entity/job'

export type Model = {
  repos: { job: Job.Repo.Repository }
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
}: Partial<Model>): Model => ({
  repos,
})

/** Get the repos from the given state model. */
export const getRepos = (model: Model): { job: Job.Repo.Repository } =>
  model.repos

/** Set the repo value of the given state model. */
export type SetRepos
  =  (v: { job: Job.Repo.Repository })
  => (s: Model)
  => Model
export const setRepos: SetRepos = repos => model => ({
  ...model,
  repos,
})
