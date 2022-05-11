import { fetchWrapper } from './fetch';

export const getAllCities = body =>
	fetchWrapper({
		url: 'all-cities',
		body,
	});

export const getAllLocationTypes = body =>
	fetchWrapper({
		url: 'all-location-types',
		body,
	});

export const getAllRentTypes = body =>
	fetchWrapper({
		url: 'all-rent-types',
		body,
	});

export const getAllCategories = body =>
	fetchWrapper({
		url: 'all-categories',
		body,
	});

export const getAllApartments = body =>
	fetchWrapper({
		url: 'api/all-apartments',
		body,
	});

export const getAllApartmentDetails = id =>
	fetchWrapper({
		url: `apartment/${id}`,
	});
