import { Component } from 'react';
import { DEFAULT_PROPS, PROP_TYPES } from './PublicRoute.config';
import { History } from '..';
import { MainLayout } from 'layout';

const TargetPage = ({ MyComponent, hasLayout }) => {
	return hasLayout ?
		<MainLayout>
			<MyComponent />
		</MainLayout>:
		<MyComponent />
};

class PublicRoute extends Component {
	render() {
		const { MyComponent, hasLayout } = this.props;

		return <TargetPage MyComponent={MyComponent} hasLayout={hasLayout} />;
	}
}

PublicRoute.defaultProps = DEFAULT_PROPS;
PublicRoute.propTypes = PROP_TYPES;

export { PublicRoute };
