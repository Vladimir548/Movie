import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGenres } from '../../../models/movie.interface'

interface IInitialState {
	countriesValue: IGenres[]
}

const initialState: IInitialState = {
	countriesValue: []
}

const countriesSLice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		addCountries(state, action: PayloadAction<IGenres>) {
			const selectedItem = state.countriesValue.find(
				item => item.slug === action.payload.slug
			)
			if (!selectedItem) {
				state.countriesValue = [...state.countriesValue, action.payload]
			}
			console.log(selectedItem)
		},
		removeCountries(state, action: PayloadAction<string>) {
			state.countriesValue = state.countriesValue.filter(
				item => item.slug !== action.payload
			)
		},
		clearCountries(state) {
			state.countriesValue = []
		}
	}
})

export default countriesSLice.reducer
export const { addCountries, removeCountries, clearCountries } =
	countriesSLice.actions
