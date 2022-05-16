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
import { Success } from 'src/components/Notification/notification.success';
import { ROUTES } from 'src/router/constants';
import { Error } from 'src/components/Notification/notification.error';
import { history } from 'src/router';

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

export const getAllApartments = (body, clear) => dispatch => {
	if (clear) dispatch(clearApartmentsList());
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
		url: `apartment/${id}/`,
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
	const formData = new FormData();

	// eslint-disable-next-line guard-for-in
	for (const key in body) {
		formData.append(key, body[key]);
	}
	return fetchWrapper(
		{
			url: `add-apartment`,
			method: 'POST',
			body: formData,
		},
		true,
	)
		.then(resp => {
			Success({ description: 'Пост был успешно создан.', message: 'Создано!' });
			history.push(ROUTES.PORTAL);
		})
		.catch(resp => {
			Error({ description: 'Пост не был создан.' });
		});
};
