import { Component } from 'react';
import { DEFAULT_PROPS, PROP_TYPES } from './PrivateRoute.config';
import { History } from '..';
import { IS_LOGGED_IN } from 'configs/variables.config';
import { MainLayout } from 'layout';
import { Navigate } from 'react-router-dom';
import { PATHS } from 'configs/routes.config';

const TargetPage = ({ MyComponent, hasLayout }) => {
	const isLoggedIn = localStorage.getItem('IS_LOGGED_IN') === 'true';
	console.log('private: ', isLoggedIn, localStorage.getItem("IS_LOGGED_IN"));
	if (!isLoggedIn) {
		return <Navigate replace to={PATHS.LOGIN} />;
	}

	return hasLayout ? (
		<MainLayout>
			<MyComponent />
		</MainLayout>
	) : (
		<MyComponent />
	);
};

class PrivateRoute extends Component {
	render() {
		const { MyComponent, hasLayout } = this.props;

		return <TargetPage MyComponent={MyComponent} hasLayout={hasLayout} />;
	}
}

PrivateRoute.defaultProps = DEFAULT_PROPS;
PrivateRoute.propTypes = PROP_TYPES;

export { PrivateRoute };
