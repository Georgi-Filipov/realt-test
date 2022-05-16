import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import { MainSearch, ItemCard } from 'src/features';
import { history } from 'src/router';
import './style.scss';

const Main = () => {
	const rentTypesOptions = useSelector(store => store.mainInfo.rent_types);
	const buyType = rentTypesOptions.find(el => el.label === 'Продажа')?.value;
	const rentType = rentTypesOptions.find(el => el.label === 'Аренда')?.value;

	return (
		<div className="page-main">
			<MainSearch />
			<Row justify="center" align="middle" className="usage">
				<ItemCard
					img="https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.png"
					title="Найти жилье"
					subtitle="Найдите свое место с захватывающими фотографиями и большим количеством объявлений, включая вещи, которые вы больше нигде не найдете."
					buttonOptions={{
						children: 'Найти',
						onClick: () => history.push(`/search?rent_type=${buyType}`),
					}}
				/>
				<ItemCard
					img="https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.png"
					title="Арендовать жилье"
					subtitle="Мы создаем удобный онлайн-опыт — от покупок в крупнейшей сети проката до подачи заявки и оплаты аренды."
					buttonOptions={{
						children: 'Арендовать',
						onClick: () => history.push(`/search?rent_type=${rentType}`),
					}}
				/>
				<ItemCard
					img="https://www.zillowstatic.com/s3/homepage/static/Sell_a_home.png"
					title="Подать объявление"
					subtitle="Независимо от того, какой путь вы выберете, чтобы продать свой дом, мы можем помочь вам провести успешную продажу."
					buttonOptions={{
						children: 'Заполнить форму',
						onClick: () => history.push('/add-post'),
					}}
				/>
			</Row>
		</div>
	);
};

export default Main;
