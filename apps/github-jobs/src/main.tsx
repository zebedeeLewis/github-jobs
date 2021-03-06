import _ from 'underscore'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as ReduxSaga from 'redux-saga'
import * as Mirage from 'miragejs'
import createSagaMiddleware from 'redux-saga'

import App from './app'

import * as Job from '@domain/entity/job'
import * as UiModel from '@presentation/ui/model'
import * as AppInstruction from '@presentation/ui/instruction'
import * as AppMessage from '@presentation/ui/message'
import * as AppState from '@presentation/ui/state'
import * as JobDao from '@infrastructure/data-access-object/job'

const createMockApiServer = () => {
  Mirage.createServer({
    routes() {
      this.get('/api/job', (schema, request) => {
        const { jobType
              , title
              , location
              } = request.queryParams

        const jobs = Job.Generate.dataSet

        return jobs.filter( job => (
             ( !title || (new RegExp(title, 'i')).test(Job.getTitle(job)) )
          && ( !jobType || Job.getJobType(job) === jobType)
          && ( !location || (new RegExp(location, 'i')).test(Job.getLocation(job)) )
        ))
      })
    }
  })
}


/**
 * Setup the redux store.
 *
 * @param middlewares - an array of all middlewares to be configure
 * into the application.
 *
 * @returns the new redux store.
 */
type createEnhancedStore
  = (e: Array<Redux.StoreEnhancer>)
  => Redux.Store
const createEnhancedStore: createEnhancedStore
  = enhancers => Redux.createStore(
      AppMessage.patch,
      Redux.compose( ... enhancers )
    )


/**
 * Perform all configuration and setup needed by the application.
 *
 * @param sagaMiddleware - the redux saga middleware to configure
 * into the redux store.
 *
 * @returns a new ui application model.
 */
type setup = (s: ReduxSaga.SagaMiddleware) => UiModel.Model
const setup: setup
  = sagaMiddleware => {
      /* eslint-disable no-underscore-dangle */
      const reduxConsoleEnhancer
        = process.env.NODE_ENV === 'production'
        ? []
        : [(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
           (window as any).__REDUX_DEVTOOLS_EXTENSION__()]
      /* eslint-enable no-underscore-dangle */
    
      const store = createEnhancedStore(
        [ Redux.applyMiddleware(sagaMiddleware)
        , ... reduxConsoleEnhancer
        ]
      )
    
      const repos = { job: Job.Repo.create({dao: JobDao.create()}) }
    
      return UiModel.create({store, repos})
    }


/**
 * Load the data needed to present the initial user interface.
 *
 * @param store - the redux store.
 * @returns nothing
 */
type loadInitialData = (s: Redux.Store) => void
const loadInitialData: loadInitialData
  = (store: Redux.Store) => {
      store.dispatch(
        _.compose(
          AppMessage.loadJobs,
          AppState.getCurrentPage,
          store.getState
        )()
      )
    }


/**
 * run the given sagas
 *
 * @param sagaMiddleware - the saga middleware to use.
 * @returns a function that takes an array of sagas and runs
 * each one.
 */
type RunSagas
  =  (s: ReduxSaga.SagaMiddleware)
  => (S: Array<ReduxSaga.Saga>)
  => void
const runSagas: RunSagas
  = sagaMiddleware => sagas => {
      sagas.forEach(sagaMiddleware.run)
    }


/**
 * perform all operations that should be completed before starting
 * the ui app.
 *
 * @param sagaMiddleware - the redux saga middleware to that is used
 * by the store.
 *
 * @returns nothing
 */
type preStart
  =  (s: ReduxSaga.SagaMiddleware)
  => (u: UiModel.Model)
  => void
const preStart: preStart
  = sagaMiddleware => uiModel => {
      createMockApiServer() // Development only or until I build the Api
    
      runSagas(sagaMiddleware)([
        AppInstruction.createLoadJobsSaga(uiModel),
        AppInstruction.createFilterJobsSaga(uiModel),
      ])
    
      const store = UiModel.getStore(uiModel)
      loadInitialData(store)
    }


/**
 * Start the ui app.
 *
 * @param store - the redux store
 * @returns nothing
 */
type start = (s: Redux.Store) => void
const start: start
  = store => {
      ReactDOM.render(
        <React.StrictMode>
          <ReactRedux.Provider store={store}>
            <App />
          </ReactRedux.Provider>
        </React.StrictMode>,
        document.getElementById('root')
      )
    }


/**
 * bring all the steps together and run the app.
 */
const run = () => {
  const sagaMiddleware = createSagaMiddleware()
  const uiModel = setup(sagaMiddleware)
  const store = UiModel.getStore(uiModel)

  preStart(sagaMiddleware)(uiModel)
  start(store)
}


run()
