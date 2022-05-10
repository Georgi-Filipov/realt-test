import React from 'react';
import cn from 'classnames';
import { Button as ButtonTemplate } from 'antd';
import { BUTTON_TYPES } from './constants';
import './style.scss';

const Button = ({ children, className, type = BUTTON_TYPES.DEFAULT, icon, size, ...props }) => (
	<ButtonTemplate className={cn('button-default', className)} type={type} icon={icon} size={size} {...props}>
		{children}
	</ButtonTemplate>
);

export default Button;
