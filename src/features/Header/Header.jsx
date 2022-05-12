import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row } from 'antd';
import cn from 'classnames';
import { Button, Container } from 'src/components';
import { PlusOutlined } from '@ant-design/icons';
import { history } from 'src/router';
import { ROUTES } from 'src/router/constants';
import { HEADER_OPTIONS } from './constants';
import './style.scss';
import { BUTTON_TYPES } from '../../components/Button';

const Header = () => {
	const location = useLocation();
	const [activeTab, setActiveTab] = useState(
		HEADER_OPTIONS?.find(({ href }) => location.pathname.includes(href))?.href || '',
	);

	const onTabClick = link => {
		history.push(link);
		console.log(link);
		setActiveTab(link);
	};

	return (
		<div className="portal-header">
			<Container>
				<div className="portal-header__logo">
					<img src="" alt="" />
					Savills
				</div>
				<Row className="portal-header__tabs">
					{HEADER_OPTIONS.map(el => (
						<Button
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
