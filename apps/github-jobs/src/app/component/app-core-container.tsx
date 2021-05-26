import _ from 'underscore'
import * as ReactRedux from 'react-redux'
import * as AppState from '@presentation/ui/state'
import * as AppMessage from '@presentation/ui/message'
import { AppComponent, Props } from './app-core-component'
import { useSelector } from 'react-redux'

export const AppContainer = () => {
  const dispatch = ReactRedux.useDispatch()
  const isDarkModeOn = useSelector(AppState.getDarkModeToggle)
  const jobLoadStatus = AppState.getJobDataStatus(
    useSelector(AppState.getJobs)
  )
  const isLoadingJobs = jobLoadStatus === AppState.LOADING
  const jobs = AppState.getJobData(
    useSelector(AppState.getJobs)
  )

  const currentPage = useSelector(AppState.getCurrentPage)

  const props: Props = {
    jobs,
    isDarkModeOn,
    isLoadingJobs,

    toggleDarkMode() {
      isDarkModeOn
        ? dispatch(AppMessage.toggleDarkModeOff())
        : dispatch(AppMessage.toggleDarkModeOn())
    },

    loadMoreJobs() {
      dispatch(AppMessage.loadJobs(currentPage))
    },

    handleSearchButtonClick() {
      dispatch(AppMessage.applyFilters('s'))
    }
  }

  return <AppComponent {...props} />
}
