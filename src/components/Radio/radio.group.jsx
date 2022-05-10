import React from 'react';
import { Form, Radio } from 'antd';
import cn from 'classnames';
import './radio.group.scss';

export const Group = ({ options, className, ...props }) => {
	return (
		<Form.Item className={cn('radio-group', className)} {...props.propsItem}>
			<Radio.Group {...props.propsRadioGroup}>
				{options.map(i => {
					return (
						<Radio key={i.value} value={i.value}>
							{i.label}
						</Radio>
					);
				})}
			</Radio.Group>
		</Form.Item>
	);
};
