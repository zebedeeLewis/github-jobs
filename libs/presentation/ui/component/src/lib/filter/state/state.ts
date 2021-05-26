export const DIALOG_OPEN = true
export const DIALOG_CLOSED = false

export type State = {
	dialogToggle: boolean
  searchTerm: string
  fullTimeOnly: boolean
  location: string
}

/** Create a new state */
export const create = ({
	dialogToggle = DIALOG_CLOSED,
  searchTerm = '',
  fullTimeOnly = false,
	location = '',
}: Partial<State>): State => ({
	dialogToggle,
  searchTerm,
  fullTimeOnly,
	location,
})

/** Get the dialogToggle from the given job state.*/
export const getDialogToggle = (state: State): boolean =>
	state.dialogToggle

/** Set the dialogToggle of the given job state.*/
export type SetDialogToggle
	=  (v: boolean)
	=> (m: State)
	=> State
export const setDialogToggle: SetDialogToggle = dialogToggle => state =>
  create({ ...state, dialogToggle, })


/** Get the searchTerm from the given job state.*/
export const getSearchTerm = (state: State): string => state.searchTerm

/** Set the searchTerm of the given job state.*/
export type SetSearchTerm
	=  (v: string)
	=> (m: State)
	=> State
export const setSearchTerm: SetSearchTerm = searchTerm => state =>
  create({ ...state, searchTerm, })

/** Get the location from the given job state.*/
export const getLocation = (state: State): string => state.location

/** Set the location of the given job state.*/
export type SetLocation
	=  (v: string)
	=> (m: State)
	=> State
export const setLocation: SetLocation = location => state =>
  create({ ...state, location })

/** Get the fullTimeOnly from the given job state.*/
export const getFullTimeOnly = (state: State): boolean =>
  state.fullTimeOnly

/** Set the fullTimeOnly of the given job state.*/
export type SetFullTimeOnly
	=  (v: boolean)
	=> (m: State)
	=> State
export const setFullTimeOnly: SetFullTimeOnly = fullTimeOnly => state =>
  create({ ...state, fullTimeOnly })
