import * as Redux from 'redux'
import * as ReduxObservable from 'redux-observable'
import {flow} from 'fp-ts/function'

import {State} from '../state'
import {Action} from '../action'


export const create = (): Redux.Store => {
  const effectsMiddleware
    = ReduxObservable.createEpicMiddleware<
      Action.Action, Action.Action, State.State
    >()

  const store = Redux.createStore(
    State.reducer,
    flow(
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
      Redux.applyMiddleware(effectsMiddleware),
    )
  )

  effectsMiddleware.run(State.effects)

  return store
}

