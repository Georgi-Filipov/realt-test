import React from 'react';
import { Input, Form } from 'antd';
import cn from 'classnames';

import './input.password.scss';

export const Password = ({ children, className, ...props }) => {
	return (
		<Form.Item className={cn('input-password', className)} {...props.propsItem}>
			<Input.Password {...props.propsInput} />
		</Form.Item>
	);
};
