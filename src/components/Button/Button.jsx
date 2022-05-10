import React from 'react';

import Default from './button.default';

const Button = props => {
	return <Default {...props} />;
};

Button.Default = Default;

export default Button;
