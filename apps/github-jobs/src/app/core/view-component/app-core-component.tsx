import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { Header } from '@shared/ui/component'
import * as Theme from '@shared/ui/theme'

import * as HomePage from '../../page/home'
import * as DetailsPage from '../../page/details'
import * as NotFoundPage from '../../page/404'
import Logo from '../../../assets/image/logo.svg'

export function AppComponent() {
  const theme = Theme.setTo(Theme.LIGHT)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header.View logoSrc={Logo} logoAlt="Logo" />
        <Switch>
          <Route exact path="/" component={HomePage.View} />
          <Route path="/details/:id" component={DetailsPage.View} />
          <Route path="/*" component={NotFoundPage.View} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
