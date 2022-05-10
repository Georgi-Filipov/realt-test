import React, { useMemo } from 'react';
import { Menu } from 'antd';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { history } from 'src/router';
import './menu.portal-bar.scss';

const { SubMenu } = Menu;

const PortalBar = ({ className, options }) => {
	const location = useLocation();
	const onSelect = ({ key }) => {
		history.push(key);
	};
	const values = useMemo(() => {
		return {
			defaultOpenKeys: [location.pathname.split('-')[0]],
			selectedKeys: [location.pathname],
		};
	}, [location]);
	return (
		<Menu {...values} onSelect={onSelect} inlineIndent={23} className={cn('menu-portal-bar', className)} mode="inline">
			{options.map(i => {
				return (
					<SubMenu
						onTitleClick={({ key }) => {
							if (!i.children) history.push(key);
						}}
						key={i.value}
						className={cn({ 'menu-portal-bar_empty': !i.children })}
						title={i.label}>
						{i.children?.map(j => {
							return <Menu.Item key={j.value}>{j.label}</Menu.Item>;
						})}
					</SubMenu>
				);
			})}
		</Menu>
	);
};

export default PortalBar;
