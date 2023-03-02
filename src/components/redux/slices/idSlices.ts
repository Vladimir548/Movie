import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IID {
	id: number | null
}

const initialState: IID = {
	id: null
}

const idSlices = createSlice({
	name: 'idfilms',
	initialState,
	reducers: {
		getFilmsByID(state, action: PayloadAction<number>) {
			state.id = action.payload
		}
	}
})

export default idSlices.reducer

export const { getFilmsByID } = idSlices.actions
