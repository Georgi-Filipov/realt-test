import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Card, Input, Select, Radio, Button, Upload } from 'src/components';
import { BUTTON_TYPES } from 'src/components/Button';
import { createPost } from 'src/helpers/actions';
import { useMinMax, usePhone, useRequired } from 'src/helpers/hooks';
import './style.scss';

const AddPost = () => {
	const [form] = useForm();
	const requireRule = useRequired();
	const phoneRule = usePhone();
	const requireMinMax = useMinMax(1, 9999);
	const dispatch = useDispatch();
	const onFinish = ({ images, ...values }) => {
		const image = images?.[0].originFileObj;
		if (image) delete image.uid;
		const data = {
			...values,
			image,
			date: moment().format('YYYY-MM-DD'),
		};

		dispatch(createPost(data));
	};

	const citiesOptions = useSelector(store => store.mainInfo.cities);
	const rentTypesOptions = useSelector(store => store.mainInfo.rent_types);
	const locationTypesOptions = useSelector(store => store.mainInfo.location_types);

	return (
		<div className="page-add-post">
			<Card className="card-add-post">
				<Typography.Title>Создание объявления</Typography.Title>
				<Form form={form} onFinish={onFinish}>
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
					<Upload.ListFiles
						propsItem={{
							name: 'images',
							rules: [requireRule],
						}}
						propsUpload={{
							maxCount: 7,
							listType: 'picture',
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
											value: 'EUR',
											label: 'Евро',
										},
										{
											value: 'UAH',
											label: 'Гривна',
										},
										{
											value: 'BYN',
											label: 'Рубль бел.',
										},
										{
											value: 'RUB',
											label: 'Рубль рос.',
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
									name: 'region',
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
									placeholder: 'Адрес',
								}}
							/>
						</Col>
					</Row>
					<Row gutter={[16, 0]}>
						<Col span={12}>
							<Select
								propsItem={{
									name: 'location',
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
									label: 'Тип сделки',
									rules: [requireRule],
								}}
								options={rentTypesOptions}
								propsRadioGroup={{
									placeholder: 'Тип сделки',
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
					<Row gutter={[16, 0]}>
						<Col span={8}>
							<Input.Number
								propsItem={{
									name: 'room_count',
									label: 'Количество комнат',
									rules: [requireMinMax],
								}}
								propsInputNumber={{
									placeholder: 'Количество комнат',
								}}
							/>
						</Col>
						<Col span={16}>
							<Input
								propsItem={{
									name: 'phone',
									label: 'Контактный телефон',
									rules: [phoneRule],
								}}
								propsInputNumber={{
									placeholder: 'Контактный телефон',
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
