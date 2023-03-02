import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../../../models/inititalState.interface'
type TPageNumber = {
	pageNumber: number
}
const initialState: TPageNumber = {
	pageNumber: 1
}

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		handlePrevPageNumber(state) {
			state.pageNumber--
		},
		handleNextPageNumber(state) {
			state.pageNumber++
		}
	}
})
export const { handleNextPageNumber, handlePrevPageNumber } =
	paginationSlice.actions
export default paginationSlice.reducer
