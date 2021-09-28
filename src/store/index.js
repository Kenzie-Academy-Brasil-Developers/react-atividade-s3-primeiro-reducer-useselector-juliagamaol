import {createStore, combineReducers} from 'redux'

import {fruitsReducer} from './modules/fruits/reducer'

const reducers = combineReducers({fruits: fruitsReducer})

export const store = createStore(reducers)