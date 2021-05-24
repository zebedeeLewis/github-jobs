import * as _ from 'underscore'
import * as ReduxSaga from 'redux-saga/effects'
import * as UseCase from '@libs/use-case'
import * as Job from '@libs/domain/job'
import * as Message from '../message'
import * as App from '../application'

/**
 * Load the given page of jobs.
 *
 * @param repo - the the job repository
 * @param pageNumber - the page number we want to load
 * @returns a new command that when executed will load the jobs
 */
export function* loadJobs(
  repo: Job.Repo.Repository,
  msg: Message.LOAD_JOBS_COMMAND
) {
  const useCase = <Job.Repo.Lister>(
    _.compose(UseCase.apply, UseCase.filterByPageNumber(msg.payload))
  )

  try {
    const jobs = yield ReduxSaga.call(useCase, repo)
    yield ReduxSaga.put(Message.jobsLoaded(jobs))
  } catch (e) {
    yield ReduxSaga.put(Message.jobsFailedToLoad("I don't know"))
  }
}

export const configLoadJobsCommand = (app: App.Model) =>
  function* loadJobsSaga() {
    yield ReduxSaga.takeLatest(
      Message.LOAD_JOBS,
      _.partial(loadJobs, app.repos.job)
    )
  }
