import React from 'react';
import { Typography } from 'antd';
import Img1 from 'src/assets/Sell_My_Home.png';
import Img2 from 'src/assets/PartnerAgents.png';
import Img3 from 'src/assets/agent.svg';
import './style.scss';

export const About = () => (
	<div className="page-about">
		<Typography.Title>Savills</Typography.Title>
		<div className="page-about__row">
			<Typography.Text>
				Самый надежны сервис по поиску жилья. Вы можете найти загородну или городскую недвижемость по самым выгодным
				ценам. Наш агрегатор поможет сделать поиск жилья наиболее комфортным и сократит время поиска подходящего
				варианта.
			</Typography.Text>
			<img src={Img2} alt="" />
		</div>
		<div className="page-about__row">
			<img src={Img1} alt="" />
			<Typography.Text>
				Так же вы можете подать свое объявление об аренеде или продаже самостоятельно. Достаточноно всего пару кликов
				чтобы заполнить форму объявления и тысячи покупалетей свогую рассмотреть ваше предложение.
			</Typography.Text>
		</div>
		<div className="page-about__row">
			<Typography.Text>
				Сервис предлагает большой выбор различных преложений недвижимости от различных продавцов, как от частных, так и
				от крупных фирм.
			</Typography.Text>
			<img src={Img3} alt="" />
		</div>
	</div>
);
