import * as State from '@presentation/ui/state'


export const TOGGLE_DARK_MODE_OFF = 'TOGGLE_DARK_MODE_OFF'
export type ToggleDarkModeOffCommand
  = {type: typeof TOGGLE_DARK_MODE_OFF}


/**
 * This command message is used to direct the system to turn off
 * dark mode.
 */
type toggleDarkModeOff = () => ToggleDarkModeOffCommand
export const toggleDarkModeOff: toggleDarkModeOff
  = () => ({ type: TOGGLE_DARK_MODE_OFF })


/** Handles the toggle dark mode off command message */
type handleToggleDarkModeOff
  =  (s: State.State)
  => (msg: ToggleDarkModeOffCommand)
  => State.State
export const handleToggleDarkModeOff: handleToggleDarkModeOff
  = state => msg => State.setDarkModeToggle(State.DARK_MODE_OFF)(state)
