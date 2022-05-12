import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	apartmentsList: [],
	apartmentsListLoading: false,
	apartmentInfo: {},
	apartmentInfoLoading: false,
};

export const apartmentsSlice = createSlice({
	name: 'apartments',
	initialState,
	reducers: {
		setApartmentsList: (state, { payload }) => {
			state.apartmentsList = [...state.apartmentsList, ...payload];
		},
		clearApartmentsList: state => {
			state.apartmentsList = [];
		},
		setApartmentsListLoading: (state, { payload }) => {
			state.apartmentsListLoading = payload;
		},
		setApartmentInfo: (state, { payload }) => {
			state.apartmentInfo = payload;
		},
		clearApartmentInfo: state => {
			state.apartmentInfo = {};
		},
		setApartmentInfoLoading: (state, { payload }) => {
			state.apartmentInfoLoading = payload;
		},
	},
});

export const {
	clearApartmentInfo,
	clearApartmentsList,
	setApartmentInfo,
	setApartmentsList,
	setApartmentInfoLoading,
	setApartmentsListLoading,
} = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
