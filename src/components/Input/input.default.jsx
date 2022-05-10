import React from 'react';
import { Input, Form } from 'antd';
import cn from 'classnames';

import './input.default.scss';

export const Default = ({ children, className, ...props }) => {
	return (
		<Form.Item className={cn('input-default', className)} {...props.propsItem}>
			<Input {...props.propsInput} />
		</Form.Item>
	);
};
