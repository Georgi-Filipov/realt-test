import React from 'react';
import cn from 'classnames';
import './styles.scss';

export const Card = ({ className, children }) => <div className={cn('card-default', className)}>{children}</div>;
