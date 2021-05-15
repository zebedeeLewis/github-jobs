import * as State from '../state'
import * as Theme from '@shared/ui/theme'

/**
 * Represents all supported redux action type.
 */
export enum Type {
  ToggleDarkModeOn = 'ToggleDarkModeOn',
  ToggleDarkModeOff = 'ToggleDarkModeOff',
}

/**
 * Describes a redux action intended to turn on dark mode on the
 * app.
 */
export interface ToggleDarkModeOn {
  type: Type.ToggleDarkModeOn
}

/**
 * Describes a redux action intended to turn off dark mode on the
 * app.
 */
export interface ToggleDarkModeOff {
  type: Type.ToggleDarkModeOff
}

/**
 * Represents the valid redux actions for the application state.
 */
export type Model = ToggleDarkModeOn | ToggleDarkModeOff

/**
 * Create a new ToggleDarkModeOn action
 *
 * @returns A new ToggleDarkModeOn action.
 */
export const createToggleDarkModeOn = (): ToggleDarkModeOn => ({
  type: Type.ToggleDarkModeOn,
})

/**
 * Create a new ToggleDarkModeOff action
 *
 * @returns A new ToggleDarkModeOff action.
 */
export const createToggleDarkModeOff = (): ToggleDarkModeOff => ({
  type: Type.ToggleDarkModeOff,
})

/**
 * Updates the given state according to the given action.
 *
 * @param state - the current state of the app
 * @param action - the action to perform on the given state.
 *
 * @returns A new updated app state.
 */
export const update = (
  state: State.Model = State.create({}),
  action: Model
): State.Model => {
  switch (action.type) {
    case Type.ToggleDarkModeOn:
      return State.setThemeScheme(state, Theme.DARK)
    case Type.ToggleDarkModeOff:
      return State.setThemeScheme(state, Theme.LIGHT)
    default:
      return state
  }
}
