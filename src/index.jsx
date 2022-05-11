import 'src/index.less';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router } from 'src/router';
import { ErrorBoundary } from 'src/features/ErrorBoundary';
import { store } from 'src/store/store';

ReactDOM.render(
	<ErrorBoundary>
		<Provider store={store}>
			<Router />
		</Provider>
	</ErrorBoundary>,
	document.getElementById('root'),
);
