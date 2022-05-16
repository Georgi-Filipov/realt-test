import fetch from 'isomorphic-fetch';
import { Success } from 'src/components/Notification/notification.success';

export const API_HOST = process.env.API_HOST || 'https://gipsyshit.pythonanywhere.com';

export function fetchWrapper(
	{ url, method = 'GET', query = '', body = null, headers = {}, messages = {} },
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
			headers['Content-Type'] = 'application/json';
		}
	}
	if (method === 'GET' && !query) {
		let str = '';
		for (const key in body) {
			if (body[key]) {
				str += str ? '&' : '?';
				str += `${key}=${body[key]}`;
			}
		}
		query = str;
	}
	return fetch(`${API_HOST}/api/${url}${query}`, requestParams).then(resp => {
		if (resp.status >= 200 && resp.status < 400) {
			if (resp.status === 201) Success({ description: messages.success || 'Успех!' });
			return resp.json().catch(() => {});
		}
		throw messages.error || 'Ошибка!';
	});
}
