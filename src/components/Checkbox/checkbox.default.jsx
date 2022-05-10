import React from 'react';
import { Checkbox, Form } from 'antd';
import cn from 'classnames';

import './checkbox.default.scss';

const Default = ({ children, className, ...props }) => {
	return (
		<Form.Item className={cn('checkbox-default', className)} {...props.propsItem}>
			<Checkbox {...props.propsCheckbox}>{children}</Checkbox>
		</Form.Item>
	);
};

export default Default;
