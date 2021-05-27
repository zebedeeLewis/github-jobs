import _ from 'underscore'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as ReduxSaga from 'redux-saga'
import createSagaMiddleware from 'redux-saga'

import App from './app'
import * as AppModel from '@presentation/ui/model'
import * as AppInstruction from '@presentation/ui/instruction'
import * as AppMessage from '@presentation/ui/message'
import * as AppState from '@presentation/ui/state'

/**
 * Setup the redux store.
 *
 * @param middlewares - an array of all middlewares to be configure
 * into the application.
 *
 * @returns the new redux store.
 */
const createEnhancedStore = (
  enhancers: Array<Redux.StoreEnhancer>
): Redux.Store => Redux.createStore(
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
const setup = (
  sagaMiddleware: ReduxSaga.SagaMiddleware
): AppModel.Model => {
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

  return AppModel.create({store})
}

/**
 * Load the data needed to present the initial user interface.
 *
 * @param store - the redux store.
 * @returns nothing
 */
const loadInitialData = (store: Redux.Store) => {
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
const runSagas: RunSagas = sagaMiddleware => sagas => {
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
const preStart = (
  sagaMiddleware: ReduxSaga.SagaMiddleware,
  appModel: AppModel.Model
) => {
  const store = AppModel.getStore(appModel)

  runSagas(sagaMiddleware)([
    AppInstruction.configLoadJobsInstruction(appModel)
  ])

  loadInitialData(store)
}


/**
 * Start the ui app.
 *
 * @param store - the redux store
 * @returns nothing
 */
const start = (store: Redux.Store) => {
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
  const appModel = setup(sagaMiddleware)
  const store = AppModel.getStore(appModel)

  preStart(sagaMiddleware, appModel)
  start(store)
}

run()
