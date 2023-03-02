import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IYear {
	withYear: string
	byYear: string
}

const initialState: IYear = {
	withYear: '1960',
	byYear: '2023'
}

const yearSlice = createSlice({
	name: 'year',
	initialState,
	reducers: {
		getWithYear(state, action: PayloadAction<string>) {
			state.withYear = action.payload
			console.log(state.withYear)
		},
		getByYear(state, action: PayloadAction<string>) {
			state.byYear = action.payload
		},
		clearYear(state) {
			state.withYear = '1960'
			state.byYear = '2023'
		}
	}
})

export default yearSlice.reducer
export const { getWithYear, getByYear, clearYear } = yearSlice.actions
