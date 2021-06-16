import * as Rx from 'rxjs'
import * as Redux from 'redux'
import {Action} from '../action'


export type State = {
  temp: 'temp',
}


/** TODO!!! */
export const reducer: Redux.Reducer<State, Action.Action>  = (
  s: State = {temp: 'temp'},
  a: Action.Action
): State => s


/** TODO!!! */
type effects
  =  (a$: Rx.Observable<Action.Action>)
  => Rx.Observable<Action.Action>
export const effects: effects
  = a$ => a$
