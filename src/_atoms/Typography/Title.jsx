import React from 'react';
import { Typography as TypographyAntd } from 'antd';
import cn from 'classnames';

export const Title = ({ children, className, ellipsis }) => {
	return (
		<TypographyAntd.Title ellipsis={ellipsis} className={cn('title-default', className)}>
			{children}
		</TypographyAntd.Title>
	);
};
