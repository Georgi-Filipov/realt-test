import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Row } from 'antd';
import cn from 'classnames';
import { Button, Container } from 'src/components';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';
import { history } from 'src/router';
import { ROUTES } from 'src/router/constants';
import { HEADER_OPTIONS } from './constants';
import './style.scss';
import { BUTTON_TYPES } from '../../components/Button';

const Header = () => {
	const location = useLocation();
	const [activeTab, setActiveTab] = useState('');

	const onTabClick = link => history.push(link);

	useEffect(() => {
		const newLink =
			HEADER_OPTIONS.find(({ href, exact }) => (exact ? location.pathname === href : location.pathname.includes(href)))
				?.href || '';
		setActiveTab(newLink);
	}, [location.pathname]);

	return (
		<div className="portal-header">
			<Container>
				<Link to={ROUTES.PORTAL} className="portal-header__logo">
					<HomeOutlined className="portal-header__logo__icon" />
					<span className="portal-header__logo__name">Savills</span>
				</Link>
				<Row className="portal-header__tabs">
					{HEADER_OPTIONS.map(el => (
						<Button
							key={el.href}
							type={BUTTON_TYPES.TEXT}
							onClick={() => onTabClick(el.href)}
							className={cn({ active: activeTab === el.href })}>
							{el.title}
						</Button>
					))}
				</Row>
				<div className="portal-header__navs">
					<Button onClick={() => history.push(ROUTES.ADD_POST)} icon={<PlusOutlined />}>
						Добавить объявление
					</Button>
				</div>
			</Container>
		</div>
	);
};

export { Header };
