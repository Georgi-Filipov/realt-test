import React from 'react';
import { Form, Input } from 'antd';
import cn from 'classnames';

import './input.textarea.scss';

const { TextArea: TextAreaAntd } = Input;

export const TextArea = ({ children, className, ...props }) => {
	return (
		<Form.Item className={cn('input-textarea', className)} {...props.propsItem}>
			<TextAreaAntd {...props.propsTextArea} />
		</Form.Item>
	);
};
