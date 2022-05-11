import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';
import { Card } from 'src/components/Card';
import { getApartmentDetails } from 'src/helpers/actions';
import './style.scss';

const HouseDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const apartment = useSelector(store => store.apartments.apartmentInfo);

	useEffect(() => {
		dispatch(getApartmentDetails(id));
		return () => {};
	}, []);

	return (
		<Card className="page-house-detauls">
			<img src={apartment.image} alt={apartment.title} />
			<Typography.Title>{apartment.title}</Typography.Title>
			<Typography.Text>
				Цена: {apartment.city} {apartment.price} {apartment.currency}
			</Typography.Text>
			<Typography.Text>Тип Жилья: {apartment.location_type}</Typography.Text>
			<Typography.Text>Адресс: {apartment.address}</Typography.Text>
			<Typography.Text>Дата размещения: {apartment.date}</Typography.Text>
			<Typography.Text>Контактный телефон: {apartment.phone}</Typography.Text>
			<Typography.Text>{apartment.description}</Typography.Text>
		</Card>
	);
};

export { HouseDetails };
