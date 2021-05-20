import { useEffect } from 'react'
import _ from 'underscore'
import * as State from '../state'
import * as Action from '../action'
import * as Api from '../../api'
import * as filterJobs from '@libs/use-case/filter-jobs'
import { AppComponent } from '../view-component'
import { useSelector, useDispatch } from 'react-redux'

type Props = {
  state: State.Model
}

export const AppContainer = () => {
  const dispatch = useDispatch()
  const isLoadingJobs = useSelector(State.isLoadingJobs)
  const isLoadNeeded = useSelector(State.isLoadNeeded)
  const jobs = useSelector(State.getJobs)
  const isDarkModeOn = useSelector(State.getDarkModeToggle)
  const currentPage = useSelector(State.getCurrentPage)
  const filters = useSelector(State.getFilters)

  useEffect(() => {
    const updateJobs = jobs => dispatch(Action.updateJobs(jobs))

    if (isLoadNeeded) {
      Api.getPage(currentPage + 1).then(updateJobs)
    }
  })

  const props = {
    jobs,
    isLoadingJobs,
    isDarkModeOn,

    loadNextPage() {
      dispatch(Action.loadNextPage())
    },

    updateFilters({
      location,
      fullTimeOnly,
      searchTerm,
    }: Partial<filterJobs.JobFilter>) {
      dispatch(
        Action.updateFilters(
          _.compose(
            filterJobs.setLocation(location),
            filterJobs.setFullTimeOnly(fullTimeOnly),
            filterJobs.setsearchTerm(searchTerm)
          )(filters)
        )
      )
    },

    applyFilters() {
      dispatch(Action.applyFilters())
    },

    toggleDarkMode() {
      dispatch(
        isDarkModeOn
          ? Action.toggleDarkModeOff()
          : Action.toggleDarkModeOn()
      )
    },
  }

  return <AppComponent {...props} />
}
