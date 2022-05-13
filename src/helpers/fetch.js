import { Error } from '../components/Notification/notification.error';
import { Success } from '../components/Notification/notification.success';

export const API_HOST = 'https://gipsyshit.pythonanywhere.com';

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
			if (resp.status === 201) Success({ description: messages.success });
			return resp.json().catch(() => {});
		}
		Error({ description: 'Не валидные параметры запроса' });
		return {};
	});
}
