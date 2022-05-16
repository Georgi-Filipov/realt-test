import React from 'react';
import { Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined, PhoneOutlined, SkypeOutlined, TwitterOutlined } from '@ant-design/icons';
import { ReactComponent as Tg } from 'src/assets/svg/tg.svg';
import './style.scss';

export const ContactUs = () => (
	<div className="page-contact-us">
		<Typography.Title>Не знаете что такое SAVILLS?</Typography.Title>
		<Typography.Title level={3}>Посетите наши соц. сети для получения дополнительной информации:</Typography.Title>
		<div className="page-contact-us__list">
			<a href="/" target="_blank">
				<SkypeOutlined />
				Позвоните нам в скайпе
			</a>
			<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
				<InstagramOutlined />
				Следите за нами в инстаграмм
			</a>
			<a href="/" target="_blank">
				<TwitterOutlined />
				Подписывайтесь в твиттере
			</a>
			<a href="/" target="_blank">
				<FacebookOutlined />
				Пишите в фейсбуке
			</a>
		</div>
		<Typography.Title level={3}>
			Для предложения сотрудничества , тех.поддержки или по любым другим вопросам вы можете обращаться по нашим
			контактам:
		</Typography.Title>
		<div className="page-contact-us__list">
			<a href="tel:+375296580023">
				<PhoneOutlined />
				+375296580023
			</a>
			<a href="https://t.me/v_cirik" target="_blank" rel="noreferrer">
				<Tg />
				v_cirik
			</a>
		</div>
	</div>
);
