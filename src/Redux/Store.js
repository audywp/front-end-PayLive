import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import logger from 'redux-logger'

import allReducers from './Reducer/index'

const config = {
  key: 'paylive',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(config, allReducers)

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk)
)
export const persistor = persistStore(store)
