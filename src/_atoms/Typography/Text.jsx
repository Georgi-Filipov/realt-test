import React from 'react';
import { Typography as TypographyAntd } from 'antd';
import cn from 'classnames';

export const Text = ({ children, className, ellipsis }) => {
	return (
		<TypographyAntd.Text ellipsis={ellipsis} className={cn('text-default', className)}>
			{children}
		</TypographyAntd.Text>
	);
};
