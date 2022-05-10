import React from 'react';

import './loader.global.scss';

export const Global = () => {
	const isLoading = false;

	return isLoading ? (
		<>
			<div className="loader-global_block" />
			<div className="loader-global_loader" />
		</>
	) : null;
};
