import React from 'react';
import { notification } from 'antd';

import './notification.error.scss';
import { ReactComponent as CloseIcon } from '../../assets/svg/Close.svg';

export const Error = ({ description = '', duration = 5, bottom = 50, message, placement = 'topRight' }) => {
	notification.error({
		placement,
		bottom,
		icon: null,
		closeIcon: <CloseIcon />,
		duration,
		message: message ? `Ошибка: ${message}` : 'Ошибка!',
		// eslint-disable-next-line react/no-danger
		description: <div dangerouslySetInnerHTML={{ __html: description }} />,
	});
};
