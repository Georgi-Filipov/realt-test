import React from 'react';
import { Form, Row, Typography } from 'antd';
import { Select } from 'src/components/Select';
import Input from 'src/components/Input/Input';
import { Card } from 'src/components/Card';
import './style.scss';
import { Link } from 'react-router-dom';

const data = {
	count: 1,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			title: 'Однокомнатная квартира на пр. Независимости, 60',
			price: 300,
			currency: 'USD',
			image: 'http://127.0.0.1:8000/api/media/some_photo.png',
			city: 'Минск',
			location_type: 'Жилая',
			rent_type: 'Аренда',
			hot: false,
		},
	],
};

const SearchPage = () => {
	return (
		<div className="page-search">
			<Form className="page-search__form">
				<Row>
					<Select titile="региону" />
					<Select titile="покупка/продажа" />
					<Select titile="жилая/загородная" />
				</Row>
				<Row>
					<Input.Number titile="ценовому диапазону1" />
					<Input.Number titile="ценовому диапазону2" />
					<Input.Number titile="метраж диапазону1" />
					<Input.Number titile="метраж диапазону2" />
				</Row>
			</Form>
			<div className="page-search__list">
				{data.results.map(el => (
					<PlaceCard {...el} />
				))}
			</div>
		</div>
	);
};

const getCurrency = cur => {
	switch (cur) {
		case 'USD':
			return '$';
		default:
			return 'Руб';
	}
};

const PlaceCard = ({ image, title, ...props }) => (
	<Link to={`/search/${props.id}`}>
		<Card className="card-place">
			<img className="card-place__image" src={image} alt={title} />
			<div className="card-place__info">
				<Typography.Title>{title}</Typography.Title>
				<Typography.Text>{`Стоимосить: ${props.price} ${getCurrency(props.currency)}`}</Typography.Text>
				<Typography.Text>Город: {props.city}</Typography.Text>
				<Typography.Text>Тип жилья: {props.location_type}</Typography.Text>
				<Typography.Text>Тип аренды: {props.rent_type}</Typography.Text>
			</div>
		</Card>
	</Link>
);

export { SearchPage };
