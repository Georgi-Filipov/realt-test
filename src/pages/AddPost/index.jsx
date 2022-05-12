import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row, Typography } from 'antd';
import { Card, Input, Select, Radio, Button } from 'src/components';
import { BUTTON_TYPES } from 'src/components/Button';
import { createPost } from 'src/helpers/actions';
import { useMinMax, useRequired } from 'src/helpers/hooks';
import './style.scss';

const AddPost = () => {
	const requireRule = useRequired();
	const requireMinMax = useMinMax(1, 9999);
	const dispatch = useDispatch();
	const onFinish = values => {
		dispatch(createPost(values));
	};

	const citiesOptions = useSelector(store => store.mainInfo.cities);
	const rentTypesOptions = useSelector(store => store.mainInfo.rent_types);
	const locationTypesOptions = useSelector(store => store.mainInfo.location_types);

	return (
		<div className="page-add-post">
			<Card className="card-add-post">
				<Typography.Title>Создание объявления</Typography.Title>
				<Form onFinish={onFinish}>
					<Input
						propsItem={{
							name: 'title',
							label: 'Заголовок',
							rules: [requireRule],
						}}
						propsInput={{
							placeholder: 'Заголовок',
						}}
					/>
					<Row gutter={[16, 0]}>
						<Col span={16}>
							<Input.Number
								propsItem={{
									name: 'price',
									label: 'Цена',
									rules: [requireRule],
								}}
								propsInputNumber={{
									placeholder: 'Цена',
								}}
							/>
						</Col>
						<Col span={8}>
							<Select
								propsItem={{
									name: 'currency',
									label: 'Валюта',
									rules: [requireRule],
								}}
								propsSelector={{
									placeholder: 'Валюта',
									options: [
										{
											value: 'USD',
											label: 'Доллар',
										},
										{
											value: 'BY',
											label: 'Рубли',
										},
									],
								}}
							/>
						</Col>
					</Row>
					<Row gutter={[16, 0]}>
						<Col span={12}>
							<Select
								propsItem={{
									name: 'city',
									label: 'Город',
									rules: [requireRule],
								}}
								propsSelector={{
									placeholder: 'Город',
									options: citiesOptions,
								}}
							/>
						</Col>
						<Col span={12}>
							<Input
								propsItem={{
									name: 'address',
									label: 'Адрес',
									rules: [requireRule],
								}}
								propsInput={{
									placeholder: 'Адресс',
								}}
							/>
						</Col>
					</Row>
					<Row gutter={[16, 0]}>
						<Col span={12}>
							<Select
								propsItem={{
									name: 'location_type',
									label: 'Тип местности',
									rules: [requireRule],
								}}
								propsSelector={{
									options: locationTypesOptions,
									placeholder: 'Тип местности',
								}}
							/>
						</Col>
						<Col span={12}>
							<Radio.Group
								propsItem={{
									name: 'rent_type',
									label: 'Тип продажи',
									rules: [requireRule],
								}}
								options={rentTypesOptions}
								propsRadioGroup={{
									placeholder: 'Тип продажи',
								}}
							/>
						</Col>
					</Row>
					<Row gutter={[16, 0]}>
						<Col span={12}>
							<Input.Number
								propsItem={{
									name: 'year',
									label: 'Год постройки',
									rules: [requireRule],
								}}
								propsInputNumber={{
									placeholder: 'Год постройки',
								}}
							/>
						</Col>
						<Col span={12}>
							<Input.Number
								propsItem={{
									name: 'area',
									label: 'Площаль (м2)',
									rules: [requireMinMax],
								}}
								propsInputNumber={{
									placeholder: 'Площаль',
								}}
							/>
						</Col>
					</Row>
					<Input.TextArea
						propsItem={{
							name: 'description',
							label: 'Описание',
							rules: [],
						}}
						propsTextArea={{
							placeholder: 'Описание',
						}}
					/>
					<div className="form-footer">
						<Button htmlType="submit" type={BUTTON_TYPES.PRIMARY}>
							Создать
						</Button>
					</div>
				</Form>
			</Card>
		</div>
	);
};

export { AddPost };
