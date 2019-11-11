import AsyncStorage from '@react-native-community/async-storage'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storag: AsyncStorage,
      whitelist: ['auth', 'user']
    },
    reducers
  )
  return persistedReducer
}
