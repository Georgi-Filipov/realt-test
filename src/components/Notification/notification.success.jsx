import React from 'react';
import { notification } from 'antd';

import './notification.success.scss';
import { ReactComponent as CloseIcon } from '../../assets/svg/Close.svg';

export const Success = ({ description = '', duration = 5, bottom = 50, message, placement = 'topRight' }) => {
	notification.success({
		placement,
		bottom,
		icon: null,
		closeIcon: <CloseIcon />,
		duration,
		message: `Success! ${message}` || 'Success!',
		description,
	});
};
