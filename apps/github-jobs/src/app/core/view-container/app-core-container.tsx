import { useEffect } from 'react'
import { Store as ReduxStore } from 'redux'
import { useSelector } from 'react-redux'

import { AppComponent } from '../view-component'
import * as State from '../state'
import * as Action from '../action'
import * as Api from '../../api'

export type Props = {
  store: ReduxStore
}

export const AppContainer = ({ store }: Props) => {
  const state = store.getState()

  const updateJobs = jobs => store.dispatch(Action.updateJobs(jobs))

  useEffect(() => {
    if (State.isPageLoadNeeded(state)) {
      Api.getNextPage(state).then(updateJobs)
    }
  })

  const toggleDarkMode = () => {
    store.dispatch(
      State.isDarkModeOn(state)
        ? Action.toggleDarkModeOff()
        : Action.toggleDarkModeOn()
    )
  }

  const jobs = useSelector(State.getJobs)
  const props = {
    jobs,
    isDarkModeOn: State.isDarkModeOn(state),
    toggleDarkMode,
  }

  return <AppComponent {...props} />
}
