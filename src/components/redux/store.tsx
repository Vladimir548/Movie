import { combineReducers, configureStore } from '@reduxjs/toolkit'
import paginationSlice from './slices/paginationSlice'
import searchValue from './slices/searchSlices'
import dropwodnslice from './slices/dropwodnslice'
import genresSLice from './slices/genresSLice'
import ratingSlice from './slices/ratingSlice'
import idSlices from './slices/idSlices'
import countriesSlice from './slices/countriesSlice'
import yearSlice from './slices/yearSlice'
import favouritesSlice from './slices/favouritesSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const PersistConfig = {
	key: 'root',
	storage
}

const rootReducer = combineReducers({
	pagination: paginationSlice,
	search: searchValue,
	dropdown: dropwodnslice,
	genres: genresSLice,
	rating: ratingSlice,
	ByID: idSlices,
	countries: countriesSlice,
	year: yearSlice,
	favourites: favouritesSlice
})
const persistedReducer = persistReducer(PersistConfig, rootReducer)
const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})
export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
