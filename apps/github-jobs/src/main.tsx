import * as _ from 'underscore'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import App from './app'
import * as Application from '@libs/application'

const sagaMiddleware = createSagaMiddleware()

const reduxEnhancers = Redux.compose(
  Redux.applyMiddleware(sagaMiddleware),
  /* eslint-disable no-underscore-dangle */
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */
)

const store = Redux.createStore(
  Application.Message.patch,
  reduxEnhancers
)

sagaMiddleware.run(
  Application.Command.configLoadJobsCommand(Application.create({}))
)

store.dispatch(
  _.compose(
    Application.Message.loadJobs,
    Application.State.getCurrentPage,
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
