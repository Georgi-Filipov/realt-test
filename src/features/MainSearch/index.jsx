import React from 'react';
import { Form } from 'antd';
import { Select } from 'src/components/Select';
import { ReactComponent as Background } from 'src/assets/main-image.svg';
import { OPTIONS } from './constants';
import './style.scss';

export const MainSearch = () => {
	return (
		<div className="main-search">
			<Background />
			<Form>
				<Select
					propsSelector={{ options: OPTIONS }}
					propsItem={{
						name: 'client',
						label: 'Город',
						rules: [],
					}}
				/>
				<Select
					propsSelector={{ options: OPTIONS }}
					propsItem={{
						name: 'type',
						label: 'Тип жилья',
						rules: [],
					}}
				/>
			</Form>
		</div>
	);
};
