import * as Job from '@domain/entity/job'
import * as Redux from 'redux'

export type Model = {
  repos: { job: Job.Repo.Repository }
  store: Redux.Store
}

/**
 * Creates a new application model.
 *
 * @param - An object containing the input data for the new model.
 *
 * @returns A new state model.
 */
export const create = ({
  store,
  repos = {job: Job.Repo.create({})},
}: Partial<Model>): Model => ({
  store,
  repos,
})

/** Get the store from the given state model. */
export const getStore = (model: Model): Redux.Store =>
  model.store

/** Set the repo value of the given state model. */
export type SetStore
  =  (v: Redux.Store)
  => (s: Model)
  => Model
export const setStore: SetStore = store => model => ({
  ...model,
  store,
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
