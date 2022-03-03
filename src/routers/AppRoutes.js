import * as Page from 'Page';
import React from 'react';
import history from 'services/history.service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from 'configs/routes.config';
import { PrivateRoute, ProtectedRoute, PublicRoute } from './components';
function AppRoute() {
	return (
		<BrowserRouter history={history}>
			<Routes>
				<Route path={PATHS.DASHBOARD} element={<PrivateRoute MyComponent={Page.DashboardCommodityPage} />} />
				<Route path={PATHS.DASHBOARD_PRICE} element={<PrivateRoute MyComponent={Page.DashboardPricePage} />} />
				<Route path={PATHS.DASHBOARD_ORDERS} element={<PrivateRoute MyComponent={Page.DashboardOrdersPage} />} />
				<Route path={`${PATHS.PRODUCTS}/:id`} element={<PublicRoute MyComponent={Page.ProductsPage} />} />
				<Route path={PATHS.GROUP} element={<PublicRoute MyComponent={Page.GroupPage} />} />
				<Route path={PATHS.HOME} element={<PublicRoute MyComponent={Page.HomePage} />} />
				<Route path={PATHS.LOGIN} element={<ProtectedRoute MyComponent={Page.LoginPage} />} />
				<Route path={PATHS.SUCCESSFUL} element={<PublicRoute MyComponent={Page.SuccessfulPaymentPage} />} />
				<Route path={PATHS.UNSUCCESSFUL} element={<PublicRoute MyComponent={Page.UnsuccessfulPaymentPage} />} />
				<Route path={PATHS.CART} element={<PublicRoute MyComponent={Page.ShoppingCartPage} />} />
				<Route path={PATHS.CART_FORM} element={<PublicRoute MyComponent={Page.FormPage} />} />
			</Routes>
		</BrowserRouter>
	);
}
export { AppRoute };
