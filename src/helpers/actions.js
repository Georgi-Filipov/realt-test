import { fetchWrapper } from './fetch';
import {
	clearCategories,
	clearCities,
	clearLocationTypes,
	clearRentTypes,
	setCategories,
	setCities,
	setLocationTypes,
	setRentTypes,
} from '../store/reducers/mainInfoSlice';

export const getAllCities = body => dispatch =>
	fetchWrapper({
		url: 'all-cities',
		body,
	})
		.then(resp => {
			dispatch(setCities(resp.results));
		})
		.catch(() => dispatch(clearCities()));

export const getAllLocationTypes = body => dispatch =>
	fetchWrapper({
		url: 'all-location-types',
		body,
	})
		.then(resp => {
			dispatch(setLocationTypes(resp.results));
		})
		.catch(() => dispatch(clearLocationTypes()));

export const getAllRentTypes = body => dispatch =>
	fetchWrapper({
		url: 'all-rent-types',
		body,
	})
		.then(resp => {
			dispatch(setRentTypes(resp.results));
		})
		.catch(() => dispatch(clearRentTypes()));

export const getAllCategories = body => dispatch =>
	fetchWrapper({
		url: 'all-categories',
		body,
	})
		.then(resp => {
			dispatch(setCategories(resp.results));
		})
		.catch(() => dispatch(clearCategories()));

export const getAllApartments = body =>
	fetchWrapper({
		url: 'api/all-apartments',
		body,
	});

export const getAllApartmentDetails = id =>
	fetchWrapper({
		url: `apartment/${id}`,
	});
