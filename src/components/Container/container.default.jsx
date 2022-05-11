import React from 'react';
import cn from 'classnames';
import './container.default.scss';

export const Default = ({ children, className }) => <div className={cn('container', className)}>{children}</div>;
