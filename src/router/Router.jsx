import React, { useEffect } from 'react';
import { Switch, Route, Router as Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from 'src/components/Container';
import { Header, Footer } from 'src/features';
import { AddPost, HouseDetails, Main, NotFound, Search } from 'src/pages';
import { getAllCategories, getAllCities, getAllLocationTypes, getAllRentTypes } from 'src/helpers/actions';
import { ROUTES } from './constants';
import history from './history';

const Router = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCities());
		dispatch(getAllCategories());
		dispatch(getAllRentTypes());
		dispatch(getAllLocationTypes());
	}, []);
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
