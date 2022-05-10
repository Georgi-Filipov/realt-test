import React from 'react';
import cn from 'classnames';
import { Col, Image, Row } from 'antd';
import GreenLogo from '../../assets/svg/GreenLogo.svg';
import './container.center-with-logo.scss';

export const CenterWithLogo = ({ children, className }) => {
	return (
		<div className={cn('container-center-with-logo', className)}>
			<Image src={GreenLogo} preview={false} />
			<Row className="children-row" justify="space-around" align="middle">
				<Col span={18}>{children}</Col>
			</Row>
		</div>
	);
};
