import { useEffect } from 'react'
import {
  useSelector,
  useDispatch,
  useStore,
  connect,
} from 'react-redux'

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
    toggleDarkMode: () =>
      dispatch(
        State.isDarkModeOn(state)
          ? Action.toggleDarkModeOff()
          : Action.toggleDarkModeOn()
      ),
    loadNextPage: () => dispatch(Action.loadNextPage()),
    jobs: state.jobs,
    isDarkModeOn: State.isDarkModeOn(state),
    isLoadingJobs: State.isLoadingJobs(state),
  }

  return <AppComponent {...props} />
}

export const AppContainer = connect(stateToProps)(LocalAppContainer)
