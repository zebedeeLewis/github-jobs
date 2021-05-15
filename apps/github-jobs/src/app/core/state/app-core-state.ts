import * as Theme from '@shared/ui/theme'

export interface Model {
  themeScheme: Theme.ThemeScheme
}

/**
 * Creates a new application state.
 *
 * @param - An object containing the input data for the new state
 * model.
 *
 * @returns A new state model.
 */
export const create = ({
  themeScheme = Theme.LIGHT,
}: Partial<Model>): Model => ({ themeScheme })

/**
 * Get the themeScheme from the given state model.
 *
 * @param model - the state model from which we want to extract the
 * themeScheme.
 *
 * @returns The themeScheme from the given state model.
 */
export const getThemeScheme = (model: Model): Theme.ThemeScheme =>
  model.themeScheme

/**
 * Set the theme scheme of the given state model.
 *
 * @param model - the state model on which we want to set the
 * theme scheme.
 *
 * @param themeScheme - the new value of the theme scheme.
 *
 * @returns The themeScheme from the given state model.
 */
export const setThemeScheme = (
  model: Model,
  themeScheme: Theme.ThemeScheme
): Model => ({
  ...model,
  themeScheme,
})
