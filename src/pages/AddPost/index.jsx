import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Typography } from 'antd';
import { Card, Input, Select, Radio, Button } from 'src/components';
import { BUTTON_TYPES } from 'src/components/Button';
import { createPost } from 'src/helpers/actions';

const AddPost = () => {
	const dispatch = useDispatch();
	const onFinish = values => {
		dispatch(createPost(values));
	};

	return (
		<div className="page-add-post">
			<Card>
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
					<Button htmlType="submit" type={BUTTON_TYPES.PRIMARY}>
						Создать
					</Button>
				</Form>
			</Card>
		</div>
	);
};

export { AddPost };
