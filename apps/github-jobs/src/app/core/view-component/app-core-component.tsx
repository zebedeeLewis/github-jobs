import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider, ThemeOptions } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import * as Theme from '@shared/ui/theme'
import { Header } from '@shared/ui/component'

import * as HomePage from '../../page/home'
import * as DetailsPage from '../../page/details'
import * as NotFoundPage from '../../page/404'
import * as Job from '../../job'
import logo from '../../../assets/image/logo.svg'

export type Props = {
  isDarkModeOn: boolean
  toggleDarkMode: () => void
  jobs: Array<Job.State.Model>
}

export const AppComponent = ({
  isDarkModeOn,
  toggleDarkMode,
  jobs,
}: Props) => {
  const theme = Theme.setTo(isDarkModeOn ? Theme.DARK : Theme.LIGHT)
  const headerProps = {
    isDarkModeOn,
    toggleDarkMode,
    logoSrc: logo,
    logoAlt: 'logo',
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header.View {...headerProps} />
      <Router>
        <Switch>
          <Route
            exact
            path={HomePage.ROUTE}
            render={() => <HomePage.View jobs={jobs} />}
          />
          <Route
            path={DetailsPage.ROUTE}
            component={DetailsPage.View}
          />
          <Route
            path={NotFoundPage.ROUTE}
            component={NotFoundPage.View}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
