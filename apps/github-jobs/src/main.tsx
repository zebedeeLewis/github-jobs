import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { App } from './app'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  App.Action.update,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App.View />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
