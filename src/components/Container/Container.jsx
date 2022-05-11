import React from 'react';
import { Default } from './container.default';

const Container = props => <Default {...props} />;

Container.Default = Default;

export default Container;
