import 'src/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'src/router';
import { ErrorBoundary } from 'src/features/ErrorBoundary';

ReactDOM.render(
	<ErrorBoundary>
		<Router />
	</ErrorBoundary>,
	document.getElementById('root'),
);
