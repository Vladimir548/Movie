import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from '../../../models/movie.interface'

interface TDropdown {
	dropdownItem: boolean
}
const initialState: TDropdown = {
	dropdownItem: true
}

const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState,
	reducers: {
		getItemDropDown(state: Draft<any>, action: PayloadAction<boolean>) {
			state.dropdownItem = action.payload
		}
	}
})
export const { getItemDropDown } = dropdownSlice.actions
export default dropdownSlice.reducer
