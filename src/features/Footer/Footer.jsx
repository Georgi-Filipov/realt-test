import React from 'react';
import { Dropdown } from 'src/components/Dropdown';
import { Button } from 'src/components/Button';
import { Container } from 'src/components/Container';
import { MenuOutlined, PlusOutlined } from '@ant-design/icons';
import { HEADER_OPTIONS } from './constants';
import './style.scss';

const Footer = () => (
	<div className="portal-header">
		<Container>
			<div className="portal-header__logo">
				<img src="" alt="" />
				Savills
			</div>
			<div className="portal-header__navs">
				<Button icon={<PlusOutlined />}>Добавить объявление</Button>
				<Dropdown trigger="click" options={HEADER_OPTIONS}>
					<MenuOutlined />
				</Dropdown>
			</div>
		</Container>
	</div>
);

export { Footer };
