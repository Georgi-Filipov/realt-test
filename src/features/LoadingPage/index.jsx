import React from 'react';
import { Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './style.scss';

const LoadingPage = ({ loading, children }) =>
	loading ? (
		<div className="page-loading">
			<LoadingOutlined style={{ fontSize: '56px', color: '#08c', marginBottom: '16px' }} />
			<Typography.Title level={3}>Loading...</Typography.Title>
		</div>
	) : (
		children
	);

export { LoadingPage };
