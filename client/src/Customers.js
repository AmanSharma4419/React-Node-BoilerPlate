import React from 'react';
class Customer extends React.Component {
	constructor() {
		super();
		this.state = {
			Customers: []
		};
	}
	componentDidMount() {
		fetch('/api/customers').then((res) => res.json()).then((customers) => {
			this.setState({ ...this.state, Customers: customers });
		});
	}
	render() {
		return (
			<React.Fragment>
				<h2>Customers</h2>
				<div>{this.state.Customers.map((i) => <h1>{i.name}</h1>)}</div>
			</React.Fragment>
		);
	}
}
export default Customer;
