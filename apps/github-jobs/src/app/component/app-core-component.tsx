import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, Container } from '@material-ui/core'

import * as Utils from '@presentation/ui/utils'
import * as Theme from '@presentation/ui/theme'
import * as Job from '@domain/entity/job'
import { Header } from '@presentation/ui/component'

import HomePage from '../page/home'
import DetailsPage from '../page/details'
import NotFoundPage from '../page/404'
import { useStyles } from './app-core-component.style'
import logo from '../../assets/image/logo.svg'

export type Props = {
  jobs: Array<Job.Model>
  isDarkModeOn: boolean
  toggleDarkMode: () => void
  isLoadingJobs: boolean
  loadMoreJobs: () => void
  handleSearchButtonClick: () => void
}

export const AppComponent = ({
  jobs,
  isDarkModeOn,
  toggleDarkMode,
  isLoadingJobs,
  loadMoreJobs,
  handleSearchButtonClick,
}: Props) => {
  const classes = useStyles()
  const theme = Theme.setTo(isDarkModeOn ? Theme.DARK : Theme.LIGHT)

  const renderDetails = ({ match }) => {
    const currentJob = jobs
      .filter(job => job.id === match.params.id)
      .pop()

    return <DetailsPage {...currentJob} />
  }

  const headerProps = {
    isDarkModeOn,
    toggleDarkMode,
    logoSrc: logo,
    logoAlt: 'logo',
  }

  const homePageProps = {
    jobs,
    isLoadingJobs,
    loadMoreJobs,
    handleSearchButtonClick,
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header {...headerProps} />
        <Container className={classes.container}>
          <Switch>
            <Route
              exact
              path={Utils.HOME_PAGE_ROUTE}
              render={() => {return <HomePage {...homePageProps} />}}
            />
            <Route
              path={Utils.DETAILS_PAGE_ROUTE}
              render={renderDetails}
            />
            <Route
              path={Utils.NOT_FOUND_PAGE_ROUTE}
              component={NotFoundPage}
            />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  )
}
