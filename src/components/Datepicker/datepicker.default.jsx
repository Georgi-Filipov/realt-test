import React from 'react';
import { DatePicker, Form } from 'antd';
import cn from 'classnames';

import './datepicker.default.scss';

export const Default = ({ className, ...props }) => {
	return (
		<Form.Item className={cn('datepicker-default', className)} {...props.propsItem}>
			<DatePicker format="DD/MM/YYYY" {...props.propsDate} allowClear={false} />
		</Form.Item>
	);
};
