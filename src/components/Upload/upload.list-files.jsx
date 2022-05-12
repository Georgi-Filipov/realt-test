import React from 'react';
import cn from 'classnames';
import { ReactComponent as BinIcon } from 'src/assets/svg/Bin.svg';
import './upload.list-files.scss';
import { Upload, Form, Row } from 'antd';
import { Button } from '../Button';
import { notification } from '../Notification';
import { BTN_TXT } from '../../constants';

export const ListFiles = ({ className, form, ...props }) => {
	const beforeUpload = file => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) notification.error({ message: 'You can only upload JPG/PNG file!' });
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) notification.error({ message: 'Image must smaller than 2MB!' });
		return isJpgOrPng && isLt2M;
	};

	const normFile = e => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	return (
		<Form.Item
			valuePropName="fileList"
			getValueFromEvent={normFile}
			className={cn('upload-list-files', className)}
			{...props.propsItem}>
			<Upload
				customRequest={res => {
					res.onSuccess({ name: '123' });
				}}
				// onChange={handleChange}
				beforeUpload={beforeUpload}
				showUploadList={{
					removeIcon: <BinIcon />,
				}}
				{...props.propsUpload}>
				<Row>
					<Button type="link" className="upload-list-files_text">
						{BTN_TXT.UPLOAD_FILES}
					</Button>
				</Row>
			</Upload>
		</Form.Item>
	);
};
