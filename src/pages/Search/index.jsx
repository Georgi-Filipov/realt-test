import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Typography } from 'antd';
import { Select } from 'src/components/Select';
import Input from 'src/components/Input/Input';
import { Card } from 'src/components/Card';
import { getAllApartments } from 'src/helpers/actions';
import { clearApartmentsList } from 'src/store/reducers/apartmentsSlice';
import './style.scss';

const SearchPage = () => {
	const dispatch = useDispatch();
	const apartmentsList = useSelector(store => store.apartments.apartmentsList);

	useEffect(() => {
		dispatch(getAllApartments());
		return () => dispatch(clearApartmentsList());
	}, []);

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
				{apartmentsList.map(el => (
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
