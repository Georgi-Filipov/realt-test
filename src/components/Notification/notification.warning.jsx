import React from 'react';
import { notification } from 'antd';

import './notification.warning.scss';
import { ReactComponent as CloseIcon } from '../../assets/svg/Close.svg';

export const Warning = ({ description = '', duration = 5, bottom = 50, message, placement = 'topRight' }) => {
	notification.warning({
		placement,
		bottom,
		icon: null,
		closeIcon: <CloseIcon />,
		duration,
		message: `Warning: ${message}` || 'Attention!',
		description,
	});
};
