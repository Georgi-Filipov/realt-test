import React from 'react';
import { Modal } from 'antd';
import cn from 'classnames';
import './modal.default.scss';

import { ReactComponent as CloseIcon } from 'src/assets/svg/Close.svg';

const Default = ({ className, children, ...props }) => {
	const rootSelector = () => {
		return document.querySelector('.portal-container_body');
	};
	return (
		<Modal
			className={cn('modal-default', className)}
			closeIcon={<CloseIcon />}
			centered
			width="max-content"
			footer={null}
			getContainer={rootSelector}
			{...props}>
			{children}
		</Modal>
	);
};

export default Default;
