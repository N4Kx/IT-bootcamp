import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dataLoadState: 0,	// 0 - not loaded (default), 1 - loading, 2 - loaded, 3 - error
	dataLoadError: null,
	data: null,
}

export const rickormortySlice = createSlice({
	name: 'rickormorty',
	initialState,
	reducers: {
		updateLoadState: (state, action) => {
			state.dataLoadState = action.payload.state;
			state.dataLoadError = action.payload.error;
		},

		updateData: (state, action) => {
			state.data = action.payload;
		}
	},
});

export const { updateLoadState, updateData } = rickormortySlice.actions;

export default rickormortySlice.reducer;