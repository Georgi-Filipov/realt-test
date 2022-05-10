import React from 'react';
import cn from 'classnames';
import './style.scss';

const Container = ({ children, className }) => <div className={cn('container', className)}>{children}</div>;

export default Container;
