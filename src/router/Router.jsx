import React from 'react';
import { Switch, Route, Router as Routes, Redirect } from 'react-router-dom';
import { Container } from 'src/components/Container';
import { ROUTES } from './constants';
import history from './history';

const Router = () => {
	return (
		<Routes history={history}>
			{/* <Header /> */}
			<Container className="content">
				<Switch>
					<Route exact path={ROUTES.PORTAL} render={() => <Redirect to={ROUTES.SEARCH} />} />
					<Route path={ROUTES.SEARCH} render={() => <div>search</div>} />
					<Route render={() => <div>404</div>} />
				</Switch>
			</Container>
		</Routes>
	);
};

export default Router;
