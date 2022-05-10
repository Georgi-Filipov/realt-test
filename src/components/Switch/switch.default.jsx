import React from 'react';
import { Form, Switch } from 'antd';
import cn from 'classnames';

import './switch.default.scss';

export const Default = ({ className, ...props }) => {
	return (
		<Form.Item className={cn('switch-default', className)} {...props}>
			<Switch {...props.propsSwitch} />
		</Form.Item>
	);
};
