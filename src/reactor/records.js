import { Map, Set, Record } from 'immutable'

export const PROD_OPTIONS = Map({
  // logs information for each dispatch
  logDispatches: false,
  // log the entire app state after each dispatch
  logAppState: false,
  // logs what stores changed after a dispatch
  logDirtyStores: false,
  // if true, throws an error if a store returns undefined
  throwOnUndefinedDispatch: false,
  // if true, throws an error if a store returns undefined
  throwOnNonImmutableStore: false,
  // if true, throws when dispatching in dispatch
  throwOnDispatchInDispatch: false,
})

export const DEBUG_OPTIONS = Map({
  // logs information for each dispatch
  logDispatches: true,
  // log the entire app state after each dispatch
  logAppState: true,
  // logs what stores changed after a dispatch
  logDirtyStores: true,
  // if true, throws an error if a store returns undefined
  throwOnUndefinedDispatch: true,
  // if true, throws an error if a store returns undefined
  throwOnNonImmutableStore: true,
  // if true, throws when dispatching in dispatch
  throwOnDispatchInDispatch: true,
})

export const ReactorState = Record({
  dispatchId: 0,
  state: Map(),
  stores: Map(),
  cache: Map(),
  // maintains a mapping of storeId => state id (monotomically increasing integer whenever store state changes)
  storeStates: Map(),
  dirtyStores: Set(),
  debug: false,
  // production defaults
  options: PROD_OPTIONS,
})

export const ObserverState = Record({
  // observers registered to any store change
  any: Set(),
  // observers registered to specific store changes
  stores: Map({}),

  observersMap: Map({}),

  nextId: 1,
})
