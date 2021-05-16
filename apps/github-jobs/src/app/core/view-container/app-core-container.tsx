import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import * as Theme from '@shared/ui/theme'
import { AppComponent } from '../view-component'
import * as State from '../state'
import * as Action from '../action'
import * as Api from '../../api'

export const AppContainer = () => {
  const dispatch = useDispatch()
  const themeScheme = useSelector(State.getThemeScheme)
  const jobs = useSelector(State.getJobs)
  const mustLoadNextPage = useSelector(State.getMustLoadNextPage)
  const currentPage = useSelector(State.getCurrentPage)

  useEffect(() => {
    if (mustLoadNextPage) {
      Api.getPage(currentPage + 1).then(jobs =>
        dispatch(Action.updateJobs(jobs))
      )
    }
  })

  const toggleDarkMode = () => {
    dispatch(
      Theme.isLight(themeScheme)
        ? Action.toggleDarkModeOn()
        : Action.toggleDarkModeOff()
    )
  }

  const props = {
    jobs,
    theme: Theme.setTo(themeScheme),
    themeSwitchToggled: Theme.isLight(themeScheme) ? false : true,
    toggleDarkMode,
  }

  return <AppComponent {...props} />
}
