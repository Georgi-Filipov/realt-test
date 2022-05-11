import React from 'react';
import { Typography } from 'antd';
import { Button } from 'src/components/Button';
import { ROUTES } from 'src/router/constants';
import { history } from 'src/router';
import './style.scss';

export const NotFound = () => (
	<div className="page-not-found">
		<Typography.Title>Страницы которую вы ищите не существует</Typography.Title>
		<Button onClick={() => history.push(ROUTES.PORTAL)}>Домой</Button>
	</div>
);
