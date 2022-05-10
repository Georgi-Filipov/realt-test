import React from 'react';
import { Col, Row } from 'antd';
import cn from 'classnames';
import './container.title-twins-block.scss';

export const TitleTwinsBlocks = ({ titleLeft, titleRight, left, right, over, className }) => {
	return (
		<Row className={cn('container-title-twins-blocks', className)}>
			{titleLeft && (
				<Col className="label label_left" span={titleRight ? 12 : 24}>
					<span className="typ-20">{titleLeft}</span>
				</Col>
			)}
			{titleRight && (
				<Col className="label label_right" span={12}>
					<span className="typ-20">{titleRight}</span>
				</Col>
			)}
			{over}
			<Col className="blocks blocks_left" span={12}>
				{left}
			</Col>
			<Col className="blocks blocks_right" span={12}>
				{right}
			</Col>
		</Row>
	);
};
