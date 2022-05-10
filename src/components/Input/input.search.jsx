import React from 'react';
import { Input, Form } from 'antd';
import cn from 'classnames';
import { ReactComponent as SearchIcon } from 'src/assets/svg/Search.svg';
import './input.search.scss';

export const Search = ({ children, className, ...props }) => {
	return (
		<Form.Item className={cn('input-search', className)} {...props.propsItem}>
			<Input.Search addonBefore={<SearchIcon />} {...props.propsInput} />
		</Form.Item>
	);
};
