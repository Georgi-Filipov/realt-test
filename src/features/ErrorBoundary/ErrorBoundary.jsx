import React, { Component } from 'react';

const ApplicationError = () => <h1>Oops... Something went wrong.</h1>;

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true });
	}

	render() {
		const { hasError } = this.state;
		if (hasError) {
			return <ApplicationError />;
		}
		const { children } = this.props;
		return children;
	}
}

export default ErrorBoundary;
