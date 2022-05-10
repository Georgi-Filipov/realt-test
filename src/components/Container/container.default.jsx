import React from 'react';
import { Col, Row } from 'antd';
import cn from 'classnames';
import { ReactComponent as ArrowLeft } from 'src/assets/svg/ArrowLeft.svg';
import { ALIGN, JUSTIFY } from 'src/constants';
import './container.default.scss';

export const Default = ({ children, className, title, actions, arrowNav }) => {
	return (
		<Row className={cn('container-nav-back-title', className)}>
			<Col span={24}>
				<Row align={ALIGN.MIDDLE} className="container-header">
					<Col className="nav-bar" span={2}>
						<Row className="container-header_back" justify={JUSTIFY.END}>
							{arrowNav && <ArrowLeft onClick={arrowNav} />}
						</Row>
					</Col>
					<Col span={20} className="container-header_header">
						<Row justify={JUSTIFY.SPACE_BETWEEN}>
							<span className="typ-28">{title}</span>
							{actions}
						</Row>
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Row>
					<Col offset={2} span={20} className="container-body">
						{children}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
