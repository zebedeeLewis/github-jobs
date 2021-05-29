import * as State from '@presentation/ui/state'

export const TOGGLE_DARK_MODE_ON = 'TOGGLE_DARK_MODE_ON'
export type ToggleDarkModeOnCommand = {type: typeof TOGGLE_DARK_MODE_ON}

/**
 * This command message is used to direct the system to toggle dark mode.
 */
type toggleDarkModeOn_s = () => ToggleDarkModeOnCommand
export const toggleDarkModeOn: toggleDarkModeOn_s
  = () => ({ type: TOGGLE_DARK_MODE_ON })


/** handle the toggle dark mode on command */
type handleToggleDarkModeOn_s
  =  (s: State.State)
  => (msg: ToggleDarkModeOnCommand)
  => State.State
export const handleToggleDarkModeOn: handleToggleDarkModeOn_s
  = state => msg => State.setDarkModeToggle(State.DARK_MODE_ON)(state)

