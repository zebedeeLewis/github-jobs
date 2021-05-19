import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, Container } from '@material-ui/core'

import * as Theme from '@shared/ui/theme'
import { Header } from '@shared/ui/component'

import * as HomePage from '../../page/home'
import * as DetailsPage from '../../page/details'
import * as NotFoundPage from '../../page/404'
import * as Job from '../../job'
import { useStyles } from './app-core-component.style'
import logo from '../../../assets/image/logo.svg'

type Filters = {
  fullTimeOnly: boolean
  location: string
  title: string
}

export type Props = {
  isDarkModeOn: boolean
  toggleDarkMode: () => void
  jobs: Array<Job.State.Model>
  isLoadingJobs: boolean
  loadNextPage: () => void
  applyFilters: () => void
  updateFilters: (f: Filters) => void
}

export const AppComponent = ({
  isDarkModeOn,
  toggleDarkMode,
  jobs,
  isLoadingJobs,
  loadNextPage,
  applyFilters,
  updateFilters,
}: Props) => {
  const classes = useStyles()
  const theme = Theme.setTo(isDarkModeOn ? Theme.DARK : Theme.LIGHT)

  const headerProps = {
    isDarkModeOn,
    toggleDarkMode,
    logoSrc: logo,
    logoAlt: 'logo',
  }

  const homePageProps = {
    jobs,
    isLoadingJobs,
    loadNextPage,
    applyFilters,
    updateFilters,
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header.View {...headerProps} />
      <Container className={classes.container}>
        <Router>
          <Switch>
            <Route
              exact
              path={HomePage.ROUTE}
              render={() => <HomePage.View {...homePageProps} />}
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
      </Container>
    </ThemeProvider>
  )
}
