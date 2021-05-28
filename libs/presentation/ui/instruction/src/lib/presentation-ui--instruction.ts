import * as _ from 'underscore'
import * as ReduxSaga from 'redux-saga/effects'
import * as Job from '@domain/entity/job'
import * as AppMessage from '@presentation/ui/message'
import * as AppModel from '@presentation/ui/model'
import * as AppCommand from '@application/service/command'
import * as UiState from '@presentation/ui/state'

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
  const currentPage = yield ReduxSaga.select(UiState.getCurrentPage)
  const pageSize = 10 // TODO: get this value from elsewhere
  const repos = AppModel.getRepos(app)

  try {
    const jobs = yield ReduxSaga.call(
      AppCommand.viewJobList,
      currentPage,
      pageSize,
      repos.job
    )

    yield ReduxSaga.put(AppMessage.jobsLoaded(jobs))
  } catch (e) {
    yield ReduxSaga.put(AppMessage.jobsFailedToLoad("I don't know"))
  }
}

/**
 * Binds the ui model parameter of the loadJobs saga. In other words,
 * add the ui context to the loadJobs saga.
 */
export const contenxtualizeLoadJobsSaga
  = (app: AppModel.Model) => function* loadJobsSaga() {
    yield ReduxSaga.takeLatest(
      AppMessage.LOAD_JOBS,
      _.partial(loadJobs, app)
    )
  }
