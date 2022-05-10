import React from 'react';

import './item.label-value.scss';
import { Col, Row } from 'antd';
import cn from 'classnames';
import { ALIGN } from '../../constants';

export const LabelValue = ({ label, value, vertical, colSpan, style }) => {
	return (
		<Row align={ALIGN.MIDDLE} className={cn('item-label-value', { vertical })} style={style}>
			<Col span={colSpan || (vertical ? 24 : 12)}>
				<span className="typ-16">{label}</span>
			</Col>
			<Col span={colSpan || (vertical ? 24 : 12)}>{value}</Col>
		</Row>
	);
};
