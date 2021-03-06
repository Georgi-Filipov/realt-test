import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Select } from 'src/components/Select';
import { Button, BUTTON_TYPES } from 'src/components/Button';
import { history } from 'src/router';
import mainBg from 'src/assets/main-bg.png';
import './style.scss';

export const MainSearch = () => {
	const citiesOptions = useSelector(store => store.mainInfo.cities);
	const rentTypesOptions = useSelector(store => store.mainInfo.rent_types);

	const [form] = useForm();

	const onFinish = values => {
		const params = values;
		for (const key in values) {
			if (typeof values[key] === 'undefined') delete params[key];
		}
		const query = new URLSearchParams(params).toString();
		history.push(`/search${query ? `?${query}` : ''}`);
	};

	return (
		<div className="main-search">
			<img className="main-search__image" src={mainBg} alt="" />
			<div className="main-search__form-wrap">
				<Typography.Title level={3}>
					Выберите город и тип сделки <br />
					чтобы найти лучшие предложения
				</Typography.Title>
				<Form form={form} onFinish={onFinish} className="main-search__form">
					<Select
						propsSelector={{ options: citiesOptions, placeholder: 'Город' }}
						propsItem={{
							name: 'region',
							rules: [],
						}}
					/>
					<Select
						propsSelector={{ options: rentTypesOptions, placeholder: 'Тип сделки' }}
						propsItem={{
							name: 'rent_type',
							rules: [],
						}}
					/>
					<Button htmlType="submit" type={BUTTON_TYPES.PRIMARY}>
						Найти
					</Button>
				</Form>
			</div>
		</div>
	);
};
