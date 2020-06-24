import React, { Component } from 'react';
import logo from '../../public/img/netflix-logo.png';

class AppNavbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div className="nav-container">
				<img className="netflix-logo" src={logo} />
				<button onClick={this.toggle}>
					<i className="fas fa-bars fa-2x" />
				</button>
			</div>
		);
	}
}

export default AppNavbar;
