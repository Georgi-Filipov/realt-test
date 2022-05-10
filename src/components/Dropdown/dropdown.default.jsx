import React from 'react';
import cn from 'classnames';
import { Dropdown, Space } from 'antd';
import { history } from 'src/router';
import { SPACE_DIRECTION } from 'src/constants';
import './dropdown.default.scss';

const List = ({ options }) => {
	return (
		<div className="dropdown-default_list">
			<Space direction={SPACE_DIRECTION.VERTICAL} size={[0, 13]}>
				{options.map(({ label, value, action, Component, href }) => {
					const onClick = () => {
						if (href) {
							history.push(href);
						}
					};
					return (
						<div className="typ-16" key={value} onClick={action || onClick}>
							{label || <Component />}
						</div>
					);
				})}
			</Space>
		</div>
	);
};
const Default = ({ children, className, options, ...props }) => {
	return (
		<div className={cn('dropdown-default', className)}>
			<Dropdown
				getPopupContainer={el => {
					return document.querySelector('.dropdown-default') || el;
				}}
				overlay={<List options={options} />}
				{...props}>
				{children}
			</Dropdown>
		</div>
	);
};

export default Default;
