import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'

ReactDOM.render(
  <StrictMode>
    <App.View />
  </StrictMode>,
  document.getElementById('root')
)
