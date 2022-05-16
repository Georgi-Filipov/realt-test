import React, { useEffect } from 'react';
import { Switch, Route, Router as Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'src/components/Container';
import { Header, LoadingPage } from 'src/features';
import { AddPost, HouseDetails, Main, NotFound, Search, ContactUs, About } from 'src/pages';
import { getAllCategories, getAllCities, getAllLocationTypes, getAllRentTypes } from 'src/helpers/actions';
import { ROUTES } from './constants';
import history from './history';

const Router = () => {
	const dispatch = useDispatch();
	const citiesOptions = useSelector(store => store.mainInfo.cities);
	const locationTypesOptions = useSelector(store => store.mainInfo.location_types);
	const rentTypesOptions = useSelector(store => store.mainInfo.rent_types);
	const loading = !citiesOptions.length || !locationTypesOptions.length || !rentTypesOptions.length;

	useEffect(() => {
		dispatch(getAllCities());
		dispatch(getAllCategories());
		dispatch(getAllRentTypes());
		dispatch(getAllLocationTypes());
	}, []);
	return (
		<Routes history={history}>
			<LoadingPage loading={loading}>
				<Header />
				<Container className="content">
					<Switch>
						<Route exact path={ROUTES.PORTAL} component={Main} />
						<Route exact path={ROUTES.SEARCH} component={Search} />
						<Route exact path={ROUTES.ABOUT} component={About} />
						<Route exact path={ROUTES.CONTACT_US} component={ContactUs} />
						<Route exact path={ROUTES.HOUSE_DETAILS} component={HouseDetails} />
						<Route path={ROUTES.ADD_POST} component={AddPost} />
						<Route component={NotFound} />
					</Switch>
				</Container>
			</LoadingPage>
		</Routes>
	);
};

export default Router;
