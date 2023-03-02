import { configureStore } from '@reduxjs/toolkit'
import paginationSlice from './slices/paginationSlice'
import searchValue from './slices/searchSlices'
import dropwodnslice from './slices/dropwodnslice'
import genresSLice from './slices/genresSLice'
import ratingSlice from './slices/ratingSlice'
import idSlices from './slices/idSlices'
import countriesSlice from './slices/countriesSlice'
import yearSlice from './slices/yearSlice'
const store = configureStore({
	reducer: {
		pagination: paginationSlice,
		search: searchValue,
		dropdown: dropwodnslice,
		genres: genresSLice,
		rating: ratingSlice,
		ByID: idSlices,
		countries: countriesSlice,
		year: yearSlice
	}
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
