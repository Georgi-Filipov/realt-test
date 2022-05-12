import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row, Typography } from 'antd';
import { Select, Input, Card, Button } from 'src/components';
import { getAllApartments } from 'src/helpers/actions';
import { clearApartmentsList } from 'src/store/reducers/apartmentsSlice';
import { BUTTON_TYPES } from 'src/components/Button';
import './style.scss';

const SearchPage = () => {
	const dispatch = useDispatch();
	const apartmentsList = useSelector(store => store.apartments.apartmentsList);
	const citiesOptions = useSelector(store => store.mainInfo.cities);
	const locationTypesOptions = useSelector(store => store.mainInfo.location_types);

	useEffect(() => {
		dispatch(getAllApartments());
		return () => dispatch(clearApartmentsList());
	}, []);

	const onFinish = values => {
		// console.log(values);
	};

	return (
		<div className="page-search">
			<Form onFinish={onFinish} className="page-search__form">
				<Row gutter={[16, 0]}>
					<Col span={8}>
						<Select
							propsSelector={{ options: citiesOptions, placeholder: 'Город' }}
							propsItem={{
								name: 'city',
								label: 'Город',
								rules: [],
							}}
						/>
					</Col>
					<Col span={8}>
						<Input
							propsItem={{
								name: 'address',
								label: 'Адрес',
								rules: [],
							}}
							propsInput={{
								placeholder: 'Адресс',
							}}
						/>
					</Col>
					<Col span={8}>
						<Select
							propsItem={{
								name: 'location_type',
								label: 'Тип местности',
								rules: [],
							}}
							propsSelector={{
								options: locationTypesOptions,
								placeholder: 'Тип местности',
							}}
						/>
					</Col>
				</Row>
				<Row gutter={[16, 0]}>
					<Col span={12}>
						<Row gutter={[4, 0]}>
							<Col span={12}>
								<Input.Number
									propsItem={{
										name: 'price_from',
										label: 'Цена от',
										rules: [],
									}}
									propsInputNumber={{
										placeholder: 'Цена от',
									}}
								/>
							</Col>
							<Col span={12}>
								<Input.Number
									propsItem={{
										name: 'price_to',
										label: 'Цена до',
										rules: [],
									}}
									propsInputNumber={{
										placeholder: 'Цена до',
									}}
								/>
							</Col>
						</Row>
					</Col>
					<Col span={12}>
						<Row gutter={[4, 0]}>
							<Col span={12}>
								<Input.Number
									propsItem={{
										name: 'area_from',
										label: 'Площадь от',
										rules: [],
									}}
									propsInputNumber={{
										placeholder: 'Площадь от',
									}}
								/>
							</Col>
							<Col span={12}>
								<Input.Number
									propsItem={{
										name: 'area_to',
										label: 'Площадь до',
										rules: [],
									}}
									propsInputNumber={{
										placeholder: 'Площадь до',
									}}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<div className="form-footer">
						<Button type={BUTTON_TYPES.PRIMARY} htmlType="submit" className="submit-button">
							Найти
						</Button>
					</div>
				</Row>
			</Form>
			<div className="page-search__list">
				{apartmentsList.map(el => (
					<PlaceCard key={el.id} {...el} />
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
			return 'Руб.';
	}
};

const PlaceCard = ({ image, title, ...props }) => (
	<Link to={`/search/${props.id}`}>
		<Card className="card-place">
			<img className="card-place__image" src={image} alt={title} />
			<div className="card-place__info">
				<Typography.Title>{title}</Typography.Title>
				<Typography.Text className="info-item">
					{`Стоимосить: ${props.price} ${getCurrency(props.currency)}`}
				</Typography.Text>
				<Typography.Text className="info-item">Город: {props.city}</Typography.Text>
				<Typography.Text className="info-item">Тип местности: {props.location_type}</Typography.Text>
				<Typography.Text className="info-item">Тип продажи: {props.rent_type}</Typography.Text>
			</div>
		</Card>
	</Link>
);

export { SearchPage };
