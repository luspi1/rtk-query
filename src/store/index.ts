import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {favoritesReducer} from './favorites/favorites.slice.ts'
import {api} from "./api/api.ts";


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        favorites: favoritesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>