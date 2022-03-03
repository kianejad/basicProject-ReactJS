import { Component } from 'react';
import { DEFAULT_PROPS, PROP_TYPES } from './ProtectedRoute.config';
import { History } from '..';
import { MainLayout } from 'layout';
import { Navigate } from 'react-router-dom';
import { PATHS } from 'configs/routes.config';

const TargetPage = ({ MyComponent, hasLayout }) => {
	console.log('component : ', MyComponent);
	const isLoggedIn = localStorage.getItem('IS_LOGGED_IN') === 'true';
	if (isLoggedIn) {
		return <Navigate replace to={PATHS.DASHBOARD} />;
	}

	return hasLayout ? (
		<MainLayout>
			<MyComponent />
		</MainLayout>
	) : (
		<MyComponent />
	);
};

class ProtectedRoute extends Component {
	render() {
		const { MyComponent, hasLayout } = this.props;

		return <TargetPage MyComponent={MyComponent} hasLayout={hasLayout} />;
	}
}

ProtectedRoute.defaultProps = DEFAULT_PROPS;
ProtectedRoute.propTypes = PROP_TYPES;

export { ProtectedRoute };
