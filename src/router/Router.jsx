import React from 'react';
import { Switch, Route, Router as Routes } from 'react-router-dom';
import { Container } from 'src/components/Container';
import { Header, Footer } from 'src/features';
import { AddPost, HouseDetails, Main, NotFound, Search } from 'src/pages';
import { ROUTES } from './constants';
import history from './history';

const Router = () => {
	return (
		<Routes history={history}>
			<Header />
			<Container className="content">
				<Switch>
					<Route exact path={ROUTES.PORTAL} component={Main} />
					<Route exact path={ROUTES.SEARCH} component={Search} />
					<Route exact path={ROUTES.HOUSE_DETAILS} component={HouseDetails} />
					<Route path={ROUTES.ADD_POST} component={AddPost} />
					<Route component={NotFound} />
				</Switch>
			</Container>
		</Routes>
	);
};

export default Router;
