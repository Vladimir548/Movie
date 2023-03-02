import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGenres } from '../../../models/movie.interface'

interface IInitialState {
	genre: IGenres[]
}

const initialState: IInitialState = {
	genre: []
}

const genresSLice = createSlice({
	name: 'genres',
	initialState,
	reducers: {
		addGenres(state, action: PayloadAction<IGenres>) {
			const selectedItem = state.genre.find(
				item => item.slug === action.payload.slug
			)
			if (!selectedItem) {
				state.genre = [...state.genre, action.payload]
			}
			console.log(selectedItem)
		},
		removeGenres(state, action: PayloadAction<string>) {
			state.genre = state.genre.filter(item => item.slug !== action.payload)
			console.log(state.genre.filter(item => item.slug !== action.payload))
		},
		clearGenres(state) {
			state.genre = []
		}
	}
})

export default genresSLice.reducer
export const { addGenres, removeGenres, clearGenres } = genresSLice.actions
