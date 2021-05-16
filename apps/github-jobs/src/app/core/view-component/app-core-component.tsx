import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider, ThemeOptions } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { Header } from '@shared/ui/component'

import * as HomePage from '../../page/home'
import * as DetailsPage from '../../page/details'
import * as NotFoundPage from '../../page/404'
import * as Job from '../../job'
import Logo from '../../../assets/image/logo.svg'

export type Props = {
  theme: ThemeOptions
  themeSwitchToggled: boolean
  toggleDarkMode: () => void
  jobs: Array<Job.State.Model>
}

export const AppComponent = ({
  theme,
  themeSwitchToggled,
  toggleDarkMode,
  jobs,
}: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header.View
      logoSrc={Logo}
      logoAlt="Logo"
      themeSwitchToggled={themeSwitchToggled}
      toggleDarkMode={toggleDarkMode}
    />
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage.View jobs={jobs} />}
        />
        <Route path="/details/:id" component={DetailsPage.View} />
        <Route path="/*" component={NotFoundPage.View} />
      </Switch>
    </Router>
  </ThemeProvider>
)
