import { useSelector, useDispatch } from 'react-redux'

import * as Theme from '@shared/ui/theme'
import { AppComponent } from '../view-component'
import * as State from '../state'
import * as Action from '../action'

export const AppContainer = () => {
  const themeScheme = useSelector(State.getThemeScheme)
  const dispatch = useDispatch()

  const props = {
    theme: Theme.setTo(themeScheme),
    themeSwitchToggled: Theme.isLight(themeScheme) ? false : true,
    toggleThemeScheme: () => {
      dispatch(
        Theme.isLight(themeScheme)
          ? Action.createToggleDarkModeOn()
          : Action.createToggleDarkModeOff()
      )
    },
  }

  return <AppComponent {...props} />
}
