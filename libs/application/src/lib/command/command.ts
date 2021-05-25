import * as _ from 'underscore'
import * as ReduxSaga from 'redux-saga/effects'
import * as Job from '@libs/domain/job'
import * as Message from '../message'
import * as App from '../application'

/**
 * Load the given page of jobs.
 *
 * @param app - the application
 * @param pageNumber - the page number we want to load
 * @returns a new command that when executed will load the jobs
 */
export function* loadJobs(
  app: App.Model,
	msg: Message.LOAD_JOBS_COMMAND
) {
	try {
		const jobs = Job.Generate.dataSet

    yield ReduxSaga.put(Message.jobsLoaded(jobs))
  } catch (e) {
    yield ReduxSaga.put(Message.jobsFailedToLoad("I don't know"))
  }
}

export const configLoadJobsCommand = (app: App.Model) =>
  function* loadJobsSaga() {
    yield ReduxSaga.takeLatest(
      Message.LOAD_JOBS,
      _.partial(loadJobs, app)
    )
  }
