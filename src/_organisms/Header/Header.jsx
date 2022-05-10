import React from 'react';
import { Link } from 'react-router-dom';
import { history } from 'src/router';
import { Header as HeaderComponent } from 'antd/lib/layout/layout';
import { Container } from 'src/_atoms/Container';
import { Button } from 'src/_atoms/Button';
import { PlusOutlined } from '@ant-design/icons';
import { ReactComponent as Logo } from 'src/dist/logo.svg';
import { ROUTES } from 'src/router/constants';
import './style.scss';

export const Header = () => {
	const onAddClick = () => history.push(ROUTES.ADD_POST);
	return (
		<HeaderComponent className='header'>
			<Container className='header__container'>
				<Link to={ROUTES.PORTAL} className='header__logo'>
					<Logo />
					Savills
				</Link>
				<Button icon={<PlusOutlined />} onClick={onAddClick}>
					Добавить объявление
				</Button>
			</Container>
		</HeaderComponent>
	);
};
