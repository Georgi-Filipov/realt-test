import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Select, Input, Card, Button } from 'src/components';
import { getAllApartments } from 'src/helpers/actions';
import { clearApartmentsList } from 'src/store/reducers/apartmentsSlice';
import { BUTTON_TYPES } from 'src/components/Button';
import empty from 'src/assets/nothing_found.png';
import './style.scss';

const useQuery = () => {
	const location = useLocation();
	const queryString = new URLSearchParams(location.search);
	const params = {};
	for (const [key, value] of queryString.entries()) {
		params[key] = value;
	}
	return params;
};

const SearchPage = () => {
	const [form] = useForm();
	const queryParams = useQuery();
	const dispatch = useDispatch();
	const apartmentsList = useSelector(store => store.apartments.apartmentsList);
	const citiesOptions = useSelector(store => store.mainInfo.cities);
	const locationTypesOptions = useSelector(store => store.mainInfo.location_types);
	const rentTypesOptions = useSelector(store => store.mainInfo.rent_types);
	const loading = useSelector(store => store.apartments.apartmentsListLoading);

	const defaultParams = {
		region: citiesOptions.find(({ value }) => value.toString() === queryParams.region),
		rent_type: rentTypesOptions.find(({ value }) => value.toString() === queryParams.rent_type),
	};

	useEffect(() => {
		onFinish(queryParams);
		return () => dispatch(clearApartmentsList());
	}, []);

	const onFinish = values => {
		dispatch(getAllApartments(values, true));
	};

	return (
		<div className="page-search">
			<Form form={form} onFinish={onFinish} className="page-search__form">
				<Row gutter={[16, 0]}>
					<Col span={8}>
						<Select
							propsSelector={{
								options: citiesOptions,
								placeholder: 'Город',
								defaultValue: defaultParams.region,
								allowClear: true,
							}}
							propsItem={{
								name: 'region',
								label: 'Город',
								rules: [],
							}}
						/>
					</Col>
					<Col span={8}>
						<Select
							propsItem={{
								name: 'rent_type',
								label: 'Тип продажи',
								rules: [],
							}}
							propsSelector={{
								options: locationTypesOptions,
								placeholder: 'Тип продажи',
								defaultValue: defaultParams.rent_type,
								allowClear: true,
							}}
						/>
					</Col>
					<Col span={8}>
						<Select
							propsItem={{
								name: 'location',
								label: 'Тип местности',
								rules: [],
							}}
							propsSelector={{
								options: locationTypesOptions,
								placeholder: 'Тип местности',
								allowClear: true,
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
										name: 'min_price',
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
										name: 'max_price',
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
										name: 'min_area',
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
										name: 'max_area',
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
						<Button
							loading={loading}
							disabled={loading}
							type={BUTTON_TYPES.PRIMARY}
							htmlType="submit"
							className="submit-button">
							Найти
						</Button>
					</div>
				</Row>
			</Form>
			<div className="page-search__list">
				{apartmentsList.map(el => (
					<PlaceCard key={el.id} {...el} />
				))}
				{!loading && !apartmentsList.length && (
					<Card className="empty-search">
						<img src={empty} alt="" />
						<Typography.Title level={2}>Ничего не найдено</Typography.Title>
						<Typography.Text>Попробуйте другие параметры поиска</Typography.Text>
					</Card>
				)}
			</div>
		</div>
	);
};

const PlaceCard = ({ image, title, ...props }) => (
	<Link to={`/search/${props.id}`}>
		<Card className="card-place">
			<img className="card-place__image" src={image} alt={title} />
			<div className="card-place__info">
				<Typography.Title>{title}</Typography.Title>
				<Typography.Text className="info-item">{`Стоимосить: ${props.price} ${props.currency}`}</Typography.Text>
				<Typography.Text className="info-item">Город: {props.city}</Typography.Text>
				<Typography.Text className="info-item">Тип местности: {props.location_type}</Typography.Text>
				<Typography.Text className="info-item">Тип продажи: {props.rent_type}</Typography.Text>
			</div>
		</Card>
	</Link>
);

export { SearchPage };
