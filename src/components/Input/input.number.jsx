import React from 'react';
import { Form, InputNumber } from 'antd';
import cn from 'classnames';

import './input.number.scss';

export const Number = ({ children, className, ...props }) => {
	return (
		<Form.Item className={cn('input-number', className)} {...props.propsItem}>
			<InputNumber {...props.propsInputNumber} />
		</Form.Item>
	);
};
