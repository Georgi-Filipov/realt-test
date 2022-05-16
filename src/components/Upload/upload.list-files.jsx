import React from 'react';
import cn from 'classnames';
import { ReactComponent as BinIcon } from 'src/assets/svg/Bin.svg';
import { Upload, Form, Row } from 'antd';
import { Button, notification } from 'src/components';
import './upload.list-files.scss';

export const ListFiles = ({ className, form, ...props }) => {
	const beforeUpload = file => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) notification.error({ message: 'Доспупны JPG/PNG форматы файлов!' });
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) notification.error({ message: 'Привышер размер картинки в 2MB!' });
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
						Загрузить фотографии
					</Button>
				</Row>
			</Upload>
		</Form.Item>
	);
};
