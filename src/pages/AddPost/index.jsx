import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Form, Row, Typography } from 'antd';
import { Card, Input, Select, Radio, Button } from 'src/components';
import { BUTTON_TYPES } from 'src/components/Button';
import { createPost } from 'src/helpers/actions';
import './style.scss';

const AddPost = () => {
	const dispatch = useDispatch();
	const onFinish = values => {
		dispatch(createPost(values));
	};

	return (
		<div className="page-add-post">
			<Card className="card-add-post">
				<Typography.Title>Создание объявления</Typography.Title>
				<Form onFinish={onFinish}>
					<Input
						propsItem={{
							name: 'title',
							label: 'Заголовок',
							rules: [],
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
									rules: [],
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
									rules: [],
								}}
								propsSelect={{
									placeholder: 'Валюта',
								}}
							/>
						</Col>
					</Row>
					<Row gutter={[16, 0]}>
						<Col span={12}>
							<Input
								propsItem={{
									name: 'city',
									label: 'Город',
									rules: [],
								}}
								propsInput={{
									placeholder: 'Город',
								}}
							/>
						</Col>
						<Col span={12}>
							<Input
								propsItem={{
									name: 'address',
									label: 'Адресс',
									rules: [],
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
									label: 'Тип места',
									rules: [],
								}}
								propsSelect={{
									placeholder: 'Тип места',
								}}
							/>
						</Col>
						<Col span={12}>
							<Radio.Group
								propsItem={{
									name: 'rent_type',
									label: 'Тип продажи',
									rules: [],
								}}
								options={[
									{ value: 1, label: 'type1' },
									{ value: 2, label: 'type2' },
								]}
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
									rules: [],
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
									label: 'Площаль',
									rules: [],
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
