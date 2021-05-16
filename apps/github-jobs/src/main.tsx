import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { App } from './app'

const store = createStore(App.Action.update)

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App.View store={store} />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
