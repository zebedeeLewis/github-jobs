import * as Action from './action'
import * as State from './state'
import { DetailsPageContainer as View } from './view-container'

export const ROUTE = '/details/:id'

export const pathFromId = (id: string): string => `/details/${id}`

export { View, Action, State }
