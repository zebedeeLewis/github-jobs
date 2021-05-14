import styled from 'styled-components'
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'

import { Header } from '@shared/ui/component'

import * as HomePage from './page/home'
import * as DetailsPage from './page/details'
import * as NotFoundPage from './page/404'
import Logo from '../assets/image/logo.svg'

const StyledApp = styled.div`
  color: black;
`

export function App() {
  return (
    <StyledApp>
      <Router>
        <Header.View logoSrc={Logo} logoAlt="Logo" />
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
