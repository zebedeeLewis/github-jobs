import _ from 'underscore'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import App from './app'
import * as AppModel from '@presentation/ui/model'
import * as AppInstruction from '@presentation/ui/instruction'
import * as AppMessage from '@presentation/ui/message'
import * as AppState from '@presentation/ui/state'

const sagaMiddleware = createSagaMiddleware()

const reduxEnhancers
  = process.env.NODE_ENV === 'production'
  ? Redux.compose( Redux.applyMiddleware(sagaMiddleware))
  : Redux.compose(
    Redux.applyMiddleware(sagaMiddleware),
      /* eslint-disable no-underscore-dangle */
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      /* eslint-enable */
    )

const store = Redux.createStore(
  AppMessage.patch,
  reduxEnhancers
)

sagaMiddleware.run(_.compose(
  AppInstruction.configLoadJobsInstruction,
  AppModel.create
)({}))

store.dispatch(
  _.compose(
    AppMessage.loadJobs,
    AppState.getCurrentPage,
    store.getState
  )()
)

ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
