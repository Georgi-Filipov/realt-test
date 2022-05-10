import React from 'react';
import { Form, Select } from 'antd';
import cn from 'classnames';

import './select.default.scss';

export const Default = ({ children, className, ...props }) => {
	return (
		<Form.Item className={cn('select-default', className)} {...props.propsItem}>
			<Select {...props.propsSelector} />
		</Form.Item>
	);
};
