import _ from 'underscore'
import * as ReactRedux from 'react-redux'
import * as Application from '@libs/application'
import { AppComponent, Props } from './app-core-component'
import { useSelector } from 'react-redux'

export const AppContainer = () => {
  const dispatch = ReactRedux.useDispatch()
  // const jobs = Application.State.getJobData(
  //   useSelector(Application.State.getJobs)
  // )
  const isDarkModeOn = useSelector(Application.State.getDarkModeToggle)

  const props: Props = {
    //jobs,
    isDarkModeOn,
    toggleDarkMode() {
      isDarkModeOn
        ? dispatch(Application.Message.toggleDarkModeOff())
        : dispatch(Application.Message.toggleDarkModeOn())
    },
    // isLoadingJobs: false,

    // loadNextPage() {
    //   console.log()
    // },

    // updateFilters({ location, fullTimeOnly, searchTerm }) {
    //   console.log()
    // },

    // applyFilters() {
    //   console.log()
    // },
  }

  return <AppComponent {...props} />
}
