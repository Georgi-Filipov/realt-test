import { fetchWrapper } from 'src/helpers/fetch';
import {
	clearCategories,
	clearCities,
	clearLocationTypes,
	clearRentTypes,
	setCategories,
	setCities,
	setLocationTypes,
	setRentTypes,
} from 'src/store/reducers/mainInfoSlice';
import {
	clearApartmentInfo,
	setApartmentInfoLoading,
	setApartmentInfo,
	setApartmentsList,
	clearApartmentsList,
	setApartmentsListLoading,
} from 'src/store/reducers/apartmentsSlice';

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

export const getAllApartments = body => dispatch => {
	dispatch(setApartmentsListLoading(true));
	return fetchWrapper({
		url: 'all-apartments',
		body,
	})
		.then(resp => {
			dispatch(setApartmentsList(resp.results));
		})
		.catch(() => dispatch(clearApartmentsList()))
		.finally(() => {
			dispatch(setApartmentsListLoading(false));
		});
};

export const getApartmentDetails = id => dispatch => {
	dispatch(setApartmentInfoLoading(true));
	return fetchWrapper({
		url: `apartment/${id}`,
	})
		.then(resp => {
			dispatch(setApartmentInfo(resp));
		})
		.catch(() => {
			dispatch(clearApartmentInfo());
		})
		.finally(() => {
			dispatch(setApartmentInfoLoading(false));
		});
};

export const createPost = body => dispatch => {
	return fetchWrapper({
		url: `apartment`,
		method: 'POST',
		body,
	});
};
