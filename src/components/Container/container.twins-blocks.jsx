import React from 'react';
import cn from 'classnames';
import { Col, Row } from 'antd';
import './container.twins-blocks.scss';

export const TwinsBlocks = ({ left, right, className }) => {
	return (
		<Row className={cn('container-twins-blocks', className)}>
			<Col className="blocks" span={12}>
				{left}
			</Col>
			<Col className="blocks" span={12}>
				{right}
			</Col>
		</Row>
	);
};
