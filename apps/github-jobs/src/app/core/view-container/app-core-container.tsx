import { useEffect } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'

import { AppComponent } from '../view-component'
import * as State from '../state'
import * as Action from '../action'
import * as Api from '../../api'

export const AppContainer = () => {
  const store = useStore()
  const state = store.getState()
  const dispatch = useDispatch()

  const updateJobs = jobs => dispatch(Action.updateJobs(jobs))

  useEffect(() => {
    if (State.isPageLoadNeeded(state)) {
      Api.getNextPage(state).then(updateJobs)
    }
  })

  const toggleDarkMode = () => {
    dispatch(
      State.isDarkModeOn(state)
        ? Action.toggleDarkModeOff()
        : Action.toggleDarkModeOn()
    )
  }

  const props = {
    jobs: useSelector(State.getJobs),
    isDarkModeOn: useSelector(State.getDarkModeToggle),
    toggleDarkMode,
  }

  return <AppComponent {...props} />
}
