import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cities: [],
	location_types: [],
	rent_types: [],
	categories: [],
};

export const mainInfoSlice = createSlice({
	name: 'mainInfo',
	initialState,
	reducers: {
		setCities: (state, { payload }) => {
			state.cities = [...state.cities, ...payload];
		},
		setLocationTypes: (state, { payload }) => {
			state.location_types = [...state.location_types, ...payload];
		},
		setRentTypes: (state, { payload }) => {
			state.rent_types = [...state.rent_types, ...payload];
		},
		setCategories: (state, { payload }) => {
			state.categories = [...state.categories, ...payload];
		},
		clearCities: state => {
			state.cities = [];
		},
		clearLocationTypes: state => {
			state.location_types = [];
		},
		clearRentTypes: state => {
			state.rent_types = [];
		},
		clearCategories: state => {
			state.categories = [];
		},
		clearMainInfo: state => {
			state.cities = [];
			state.location_types = [];
			state.rent_types = [];
			state.categories = [];
		},
	},
});

export const {
	setCities,
	setLocationTypes,
	setRentTypes,
	setCategories,
	clearMainInfo,
	clearCities,
	clearCategories,
	clearLocationTypes,
	clearRentTypes,
} = mainInfoSlice.actions;

export default mainInfoSlice.reducer;
