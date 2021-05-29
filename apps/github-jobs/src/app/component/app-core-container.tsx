import _ from 'underscore'
import * as ReactRedux from 'react-redux'
import * as UiState from '@presentation/ui/state'
import * as UiMessage from '@presentation/ui/message'
import { AppComponent, Props } from './app-core-component'
import { useSelector } from 'react-redux'


export const AppContainer = () => {
  const dispatch = ReactRedux.useDispatch()
  const isDarkModeOn = useSelector(UiState.getDarkModeToggle)
  const jobLoadStatus = useSelector(UiState.getDataStatus)
  const isLoadingJobs = jobLoadStatus === UiState.LOADING
  const jobs = useSelector(UiState.getJobList)

  const currentPage = useSelector(UiState.getCurrentPage)

  const props: Props = {
    jobs,
    isDarkModeOn,
    isLoadingJobs,

    toggleDarkMode() {
      isDarkModeOn
        ? dispatch(UiMessage.toggleDarkModeOff())
        : dispatch(UiMessage.toggleDarkModeOn())
    },

    loadMoreJobs() {
      dispatch(UiMessage.loadJobs(currentPage))
    },

    handleSearchButtonClick(filters) {
      dispatch(UiMessage.applyFilters(filters))
    }
  }

  return <AppComponent {...props} />
}

