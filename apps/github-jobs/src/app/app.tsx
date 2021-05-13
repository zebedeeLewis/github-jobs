import styled from 'styled-components'
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'

import * as HomePage from './page/home'
import * as DetailsPage from './page/details'
import * as NotFoundPage from './page/404'

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
        <Switch>
          <Route exact path="/" component={HomePage.View} />
          <Route path="/details/:id" component={DetailsPage.View} />
          <Route path="/*" component={NotFoundPage.View} />
        </Switch>
      </Router>
    </StyledApp>
  )
}

export default App
