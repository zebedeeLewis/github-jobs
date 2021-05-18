import { useEffect } from 'react'
import * as _ from 'underscore'
import {
  useSelector,
  useDispatch,
  useStore,
  connect,
} from 'react-redux'

import * as filterJobs from '@libs/use-case/filter-jobs'

import { AppComponent } from '../view-component'

import * as State from '../state'
import * as Action from '../action'
import * as Api from '../../api'

type Props = {
  state: State.Model
}

const stateToProps = state => ({
  state,
})

const LocalAppContainer = ({ state }: Props) => {
  const dispatch = useDispatch()
  const updateJobs = jobs => dispatch(Action.updateJobs(jobs))

  useEffect(() => {
    if (State.isLoadNeeded(state)) {
      Api.getNextPage(state).then(updateJobs)
    }
  })

  const props = {
    jobs: state.jobs,
    isDarkModeOn: State.isDarkModeOn(state),
    isLoadingJobs: State.isLoadingJobs(state),

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
          )(state.filters)
        )
      )
    },

    applyFilters() {
      dispatch(Action.applyFilters())
    },

    toggleDarkMode() {
      dispatch(
        State.isDarkModeOn(state)
          ? Action.toggleDarkModeOff()
          : Action.toggleDarkModeOn()
      )
    },
  }

  return <AppComponent {...props} />
}

export const AppContainer = connect(stateToProps)(LocalAppContainer)
