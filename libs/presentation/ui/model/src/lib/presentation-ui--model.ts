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
type getStore = (m: Model) => Redux.Store
export const getStore: getStore
  = model => model.store


/** Set the repo value of the given state model. */
export type setStore
  =  (v: Redux.Store)
  => (s: Model)
  => Model
export const setStore: setStore
  = store => model => ({
      ...model,
      store,
    })


/** Get the repos from the given state model. */
type getRepos = (m: Model) => { job: Job.Repo.Repository }
export const getRepos: getRepos
  = model => model.repos


/** Set the repo value of the given state model. */
export type setRepos
  =  (v: { job: Job.Repo.Repository })
  => (s: Model)
  => Model
export const setRepos: setRepos = repos => model => ({
    ...model,
    repos,
  })
