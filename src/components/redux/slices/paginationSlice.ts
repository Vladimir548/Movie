import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../../../models/inititalState.interface'
type TPageNumber = {
	pageNumberMovie: number
	pageNumberSerial: number
}
const initialState: TPageNumber = {
	pageNumberMovie: 1,
	pageNumberSerial: 1
}

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		handlePrevPageNumberMovie(state) {
			state.pageNumberMovie--
		},
		handleNextPageNumberMovie(state) {
			state.pageNumberMovie++
		},
		handlePrevPageNumberSerial(state) {
			state.pageNumberSerial--
		},
		handleNextPageNumberSerial(state) {
			state.pageNumberSerial++
		}
	}
})
export const {
	handleNextPageNumberMovie,
	handlePrevPageNumberMovie,
	handlePrevPageNumberSerial,
	handleNextPageNumberSerial
} = paginationSlice.actions
export default paginationSlice.reducer
