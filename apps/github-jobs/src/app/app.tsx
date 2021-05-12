import styled from 'styled-components'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { ReactComponent as Logo } from './logo.svg'
import star from './star.svg'
import * as HomePage from './page/home'

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`

export function App() {
  return (
    <StyledApp>
      <Router>
        <Route path="/" component={HomePage.View} />
      </Router>
    </StyledApp>
  )
}

export default App
