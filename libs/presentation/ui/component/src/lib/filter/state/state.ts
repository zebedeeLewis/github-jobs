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
type getDialogToggle = (s: State) => boolean
export const getDialogToggle: getDialogToggle
  = state => state.dialogToggle


/** Set the dialogToggle of the given job state.*/
export type setDialogToggle
  =  (v: boolean)
  => (m: State)
  => State
export const setDialogToggle: setDialogToggle
  = dialogToggle => state => create({ ...state, dialogToggle, })


/** Get the searchTerm from the given job state.*/
type getSearchTerm = (s: State) => string
export const getSearchTerm: getSearchTerm
  = state => state.searchTerm


/** Set the searchTerm of the given job state.*/
export type setSearchTerm
  =  (v: string)
  => (m: State)
  => State
export const setSearchTerm: setSearchTerm
  = searchTerm => state => create({ ...state, searchTerm, })


/** Get the location from the given job state.*/
type getLocation = (s: State) => string
export const getLocation: getLocation
  = state => state.location


/** Set the location of the given job state.*/
export type setLocation
  =  (v: string)
  => (m: State)
  => State
export const setLocation: setLocation
  = location => state => create({ ...state, location })


/** Get the fullTimeOnly from the given job state.*/
type getFullTimeOnly = (s: State) => boolean
export const getFullTimeOnly: getFullTimeOnly
  = state => state.fullTimeOnly


/** Set the fullTimeOnly of the given job state.*/
export type setFullTimeOnly
  =  (v: boolean)
  => (m: State)
  => State
export const setFullTimeOnly: setFullTimeOnly
  = fullTimeOnly => state => create({ ...state, fullTimeOnly })
