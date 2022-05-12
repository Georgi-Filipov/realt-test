import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Select } from 'src/components/Select';
import { Button, BUTTON_TYPES } from 'src/components/Button';
import { Error } from 'src/components/Notification/notification.error';
import { history } from 'src/router';
import mainBg from 'src/assets/main-bg.png';
import './style.scss';

export const MainSearch = () => {
	const citiesOptions = useSelector(store => store.mainInfo.cities);
	const rentTypesOptions = useSelector(store => store.mainInfo.rent_types);

	const [form] = useForm();

	const onFinish = values => {
		const empty = Object.entries(values).find(([_, value]) => typeof value === 'undefined');
		const emptyText = empty?.[0] === 'city' ? 'Заполните полес "Городом"' : 'заполните поле с "Типом покупки"';
		if (empty) {
			Error({ description: emptyText });
		} else history.push(`/search?city=${values.city}&rent_type=${values.rent_type}`);
	};

	return (
		<div className="main-search">
			<img className="main-search__image" src={mainBg} alt="" />
			<div className="main-search__form-wrap">
				<Typography.Title level={3}>
					Выберите город и тип покупки <br />
					чтобы найти лучшие предложения
				</Typography.Title>
				<Form form={form} onFinish={onFinish} className="main-search__form">
					<Select
						propsSelector={{ options: citiesOptions, placeholder: 'Город' }}
						propsItem={{
							name: 'city',
							rules: [],
						}}
					/>
					<Select
						propsSelector={{ options: rentTypesOptions, placeholder: 'Тип покупки' }}
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
