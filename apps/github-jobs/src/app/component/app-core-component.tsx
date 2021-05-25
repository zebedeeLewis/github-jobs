import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, Container } from '@material-ui/core'

import * as Utils from '@libs/utils'
import * as Theme from '@shared/ui/theme'
import * as Job from '@libs/domain/job'
import { Header } from '@shared/ui/component'

import HomePage from '../page/home'
// import * as DetailsPage from '../page/details'
// import * as NotFoundPage from '../page/404'
import { useStyles } from './app-core-component.style'
import logo from '../../assets/image/logo.svg'

/*
type Filters = {
  fullTimeOnly: boolean
  location: string
  searchTerm: string
}
	 */

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

  /*
  const renderDetails = ({ match }) => {
    const currentJob = jobs
      .filter(job => job.id === match.params.id)
      .pop()

    return <DetailsPage.View {...currentJob} />
  }
		 */

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
              render={() => <HomePage {...homePageProps} />}
            />
            {/*
            <Route path={DetailsPage.ROUTE} render={renderDetails} />
            <Route
              path={NotFoundPage.ROUTE}
              component={NotFoundPage.View}
            />
							*/}
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  )
}
