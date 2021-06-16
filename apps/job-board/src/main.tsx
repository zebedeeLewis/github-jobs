import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as ReactDOM from 'react-dom'

import {DummyApi} from './app/dummy-api'
import {Store} from './app/store'
import App from '@presentation/job-board/component/app'


type renderReduxApp
  =  (s: Redux.Store)
  => void
const renderReduxApp: renderReduxApp
  = store => {
    ReactDOM.render(
      <ReactRedux.Provider store={store}>
        <App/>
      </ReactRedux.Provider> ,
      document.getElementById('root'))
  }


DummyApi.createServer()
renderReduxApp(Store.create())
