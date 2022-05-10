import React from 'react';
import { Button } from 'antd';
import cn from 'classnames';

import './button.default.scss';

const Default = ({ children, className, secondary, ...props }) => {
	return (
		<Button className={cn('button-default', className, { secondary })} {...props}>
			{children}
		</Button>
	);
};

export default Default;
