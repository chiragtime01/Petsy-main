import {configureStore} from '@reduxjs/toolkit'
import favReducer from './features/fav/fav'

export const store = configureStore({
  reducer:{
    fav:favReducer
  },
});

