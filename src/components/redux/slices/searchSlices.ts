import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IValue {
	name: string
}

const initialState: IValue = {
	name: ''
}

const searchSlices = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchValue(state, action: PayloadAction<string>) {
			state.name = state.name = action.payload
		},
		clearValue(state) {
			if (state.name.length >= 1) {
				state.name = ''
			}
		}
	}
})

export default searchSlices.reducer
export const { searchValue, clearValue } = searchSlices.actions
