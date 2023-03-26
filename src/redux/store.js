import { configureStore } from '@reduxjs/toolkit';

import rickormortyReducer from './rickormortySlice';

export const store = configureStore({
	reducer: {
		rickormorty: rickormortyReducer,
	},
})