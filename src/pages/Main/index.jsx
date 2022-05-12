import React from 'react';
import { Row } from 'antd';
import { MainSearch } from '../../features/MainSearch';
import { ItemCard } from '../../features/ItemCard';
import { history } from '../../router';
import './style.scss';

const Main = () => {
	return (
		<div className="page-main">
			<MainSearch />
			<Row justify="center" align="middle" className="usage">
				<ItemCard
					img="https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.png"
					title="Купить жилье"
					subtitle="Найдите свое место с захватывающими фотографиями и большим количеством объявлений, включая вещи, которые вы больше нигде не найдете."
					buttonOptions={{
						children: 'Купить',
						onClick: () => history.push('/search'),
					}}
				/>
				<ItemCard
					img="https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.png"
					title="Арендовать жилье"
					subtitle="Мы создаем удобный онлайн-опыт — от покупок в крупнейшей сети проката до подачи заявки и оплаты аренды."
					buttonOptions={{
						children: 'Арендовать',
						onClick: () => history.push('/search'),
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
