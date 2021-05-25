import _ from 'underscore'
import * as ReactRedux from 'react-redux'
import * as Application from '@libs/application'
import { AppComponent, Props } from './app-core-component'
import { useSelector } from 'react-redux'

export const AppContainer = () => {
  const dispatch = ReactRedux.useDispatch()
  const isDarkModeOn = useSelector(Application.State.getDarkModeToggle)
  const jobLoadStatus = Application.State.getJobDataStatus(
    useSelector(Application.State.getJobs)
  )
  const isLoadingJobs = jobLoadStatus === Application.State.LOADING
  const jobs = Application.State.getJobData(
    useSelector(Application.State.getJobs)
  )

  const currentPage = useSelector(Application.State.getCurrentPage)

  const props: Props = {
    jobs,
    isDarkModeOn,
    isLoadingJobs,

    toggleDarkMode() {
      isDarkModeOn
        ? dispatch(Application.Message.toggleDarkModeOff())
        : dispatch(Application.Message.toggleDarkModeOn())
    },

    loadMoreJobs() {
      dispatch(Application.Message.loadJobs(currentPage))
    },

		handleSearchButtonClick() {
			dispatch(Application.Message.applyFilters('s'))
		}
  }

  return <AppComponent {...props} />
}
