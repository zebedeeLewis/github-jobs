import {
  //Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, Container } from '@material-ui/core'

import * as Theme from '@shared/ui/theme'
// import * as Job from '@libs/domain/job'
import { Header } from '@shared/ui/component'

// import * as HomePage from '../page/home'
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
  //jobs: Array<Job.Model>
  isDarkModeOn: boolean
  toggleDarkMode: () => void
  // isLoadingJobs: boolean
  // loadNextPage: () => void
  // applyFilters: () => void
  // updateFilters: (f: Filters) => void
}

export const AppComponent = ({
  //jobs,
  isDarkModeOn,
  toggleDarkMode,
}: // isLoadingJobs,
// loadNextPage,
// applyFilters,
// updateFilters,
Props) => {
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

  /*
  const homePageProps = {
    jobs,
    // isLoadingJobs,
    // loadNextPage,
    // applyFilters,
    // updateFilters,
  }
		 */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header {...headerProps} />
        <Container className={classes.container}>
          <Switch>
            {/*
            <Route
              exact
              path={HomePage.ROUTE}
              render={() => <HomePage.View {...homePageProps} />}
            />
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
