import { configureStore } from '@reduxjs/toolkit';
import mainInfoReducer from './reducers/mainInfoSlice';
import apartmentsReducer from './reducers/apartmentsSlice';

export const store = configureStore({
	reducer: {
		mainInfo: mainInfoReducer,
		apartments: apartmentsReducer,
	},
});
