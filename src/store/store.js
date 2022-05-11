import { configureStore } from '@reduxjs/toolkit';
import mainInfoReducer from './reducers/mainInfoSlice';

export const store = configureStore({
	reducer: {
		mainInfo: mainInfoReducer,
	},
});
