import * as _ from 'underscore'
import * as ReduxSaga from 'redux-saga/effects'
import * as Job from '@domain/entity/job'
import * as AppMessage from '@presentation/ui/message'
import * as AppModel from '@presentation/ui/model'

/**
 * Load the given page of jobs.
 *
 * @param app - the application
 * @param pageNumber - the page number we want to load
 * @returns a new instruction that when executed will load the jobs
 */
export function* loadJobs(
  app: AppModel.Model,
  msg: AppMessage.LOAD_JOBS_COMMAND
) {
  try {
    const jobs = Job.Generate.dataSet

    yield ReduxSaga.put(AppMessage.jobsLoaded(jobs))
  } catch (e) {
    yield ReduxSaga.put(AppMessage.jobsFailedToLoad("I don't know"))
  }
}

export const configLoadJobsInstruction
  = (app: AppModel.Model) => function* loadJobsSaga() {
    yield ReduxSaga.takeLatest(
      AppMessage.LOAD_JOBS,
      _.partial(loadJobs, app)
    )
  }
