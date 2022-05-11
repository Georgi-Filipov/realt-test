import React from 'react';
import { Typography } from 'antd';
import { Card } from 'src/components/Card';
import { Button } from '../../components/Button';
import './style.scss';

export const ItemCard = ({ img, title, subtitle, buttonOptions }) => (
	<Card className="item-card">
		<div>
			<img className="item-card__image" src={img} alt="" />
			<Typography.Title className="item-card__title">{title}</Typography.Title>
			<Typography.Text className="item-card__subtitle">{subtitle}</Typography.Text>
		</div>
		<Button className="item-card__button" {...buttonOptions} />
	</Card>
);
