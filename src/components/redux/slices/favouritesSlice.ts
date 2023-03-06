import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from '../../../models/movie.interface'

interface IFavourites {
	currentItem: IMovie[]
	currentMovie: IMovie[]
	currentSerial: IMovie[]
}

const initialState: IFavourites = {
	currentItem: [],
	currentMovie: [],
	currentSerial: []
}

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addToFavorites(state, action: PayloadAction<IMovie>) {
			state.currentItem = [...state.currentItem, action.payload]
		},

		removeToFavorites(state, action: PayloadAction<number>) {
			state.currentItem = state.currentItem.filter(
				item => item.id !== action.payload
			)
		}
	}
})

export default favouritesSlice.reducer
export const { addToFavorites, removeToFavorites } = favouritesSlice.actions
