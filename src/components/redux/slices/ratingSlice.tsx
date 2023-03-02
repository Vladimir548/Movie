import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IRating {
	maxRating: number
	minRating: number
}

const initialState: IRating = {
	maxRating: 10,
	minRating: 1
}

const ratingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		getMaxRating(state, action: PayloadAction<number>) {
			state.maxRating = action.payload
		},
		getMinRating(state, action: PayloadAction<number>) {
			state.minRating = action.payload
		}
	}
})
export default ratingSlice.reducer
export const { getMaxRating, getMinRating } = ratingSlice.actions
