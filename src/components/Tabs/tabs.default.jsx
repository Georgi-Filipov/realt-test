import React from 'react';
import { Tabs } from 'antd';
import cn from 'classnames';
import './tabs.default.scss';

const Default = ({ onChange, options, className, ...props }) => (
	<Tabs className={cn('tabs-default', className)} onChange={onChange} {...props}>
		{options.map(el => (
			<Tabs.TabPane tab={el.title} key={el.href || el.title} />
		))}
	</Tabs>
);

export default Default;
