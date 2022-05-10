import React from 'react';
import { Switch, Route, Router as Routes, Redirect } from 'react-router-dom';
import { Container } from 'src/_atoms/Container';
import { Header } from 'src/_organisms/Header/Header';
import { Main, NotFound } from 'src/_pages';
import { ROUTES } from './constants';
import history from './history';

const Router = () => {
	return (
		<Routes history={history}>
			<Header />
			<Container className='content'>
				<Switch>
					<Route exact path={ROUTES.PORTAL} render={() => <Redirect to={ROUTES.SEARCH} />} />
					<Route path={ROUTES.SEARCH} component={Main} />
					<Route component={NotFound} />
				</Switch>
			</Container>
		</Routes>
	);
};

export default Router;
