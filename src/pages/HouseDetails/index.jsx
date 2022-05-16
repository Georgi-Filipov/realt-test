import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';
import { Card } from 'src/components/Card';
import { getApartmentDetails } from 'src/helpers/actions';
import './style.scss';
import { clearApartmentInfo } from '../../store/reducers/apartmentsSlice';

const HouseDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const apartment = useSelector(store => store.apartments.apartmentInfo);

	useEffect(() => {
		dispatch(getApartmentDetails(id));
		return () => {
			dispatch(clearApartmentInfo());
		};
	}, []);

	return (
		<div className="page-house-details">
			<Card className="page-house-details__card">
				<img className="page-house-details__image" src={apartment.image} alt={apartment.title} />
				<div className="page-house-details__info">
					<Typography.Title>{apartment.title}</Typography.Title>
					<Typography.Text>{`Цена: ${apartment.price} ${apartment.currency}`}</Typography.Text>
					<Typography.Text>Тип местности: {apartment.location_type}</Typography.Text>
					<Typography.Text>Город: {apartment.city}</Typography.Text>
					<Typography.Text>Адрес: {apartment.address}</Typography.Text>
					<Typography.Text>Общая площадь: {apartment.area} м²</Typography.Text>
					<Typography.Text>Контактный телефон: {apartment.phone}</Typography.Text>
					<Typography.Text>{apartment.description}</Typography.Text>
				</div>
			</Card>
		</div>
	);
};

export { HouseDetails };
