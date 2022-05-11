import { Error } from '../components/Notification/notification.error';
import { Success } from '../components/Notification/notification.success';

export const API_HOST = process.env.REACT_APP_API_HOST;

export function fetchWrapper(
	{ url, method = 'GET', query = '', body = null, headers = {}, version = 'v1', messages = {} },
	notStringify = false,
) {
	const requestParams = {
		method,
		headers,
	};
	if (method !== 'GET' && body) {
		if (notStringify) {
			requestParams.body = body;
		} else {
			requestParams.body = JSON.stringify(body);
			// eslint-disable-next-line no-param-reassign
			headers['Content-Type'] = 'application/json';
		}
	}
	if (method === 'GET' && !query) {
		let str = '';
		// eslint-disable-next-line no-restricted-syntax
		for (const key in body) {
			if (body[key]) {
				str += str ? '&' : '?';
				str += `${key}=${body[key]}`;
			}
		}
		// eslint-disable-next-line no-param-reassign
		query = str;
	}
	return fetch(`${API_HOST}/api/${version}/${url}${query}`, requestParams).then(resp => {
		if (resp.status >= 200 && resp.status < 400) {
			if (resp.status === 201) Success({ description: messages.success });
			return resp.json().catch(err => {});
		}
		Error({ description: 'Не валидные параметры запроса' });
		return {};
	});
}
