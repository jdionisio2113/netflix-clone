import React, { Component } from 'react';
import logo from '../../public/img/netflix-logo.png';
import AppNavbarContainer from '../containers/AppNavbarContainer';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.resetInput = this.resetInput.bind(this);
	}

	handleChange(e) {
		var input = e.target.value;
		this.setState({ value: input });

		clearTimeout(this.myTimeout);

		this.myTimeout = setTimeout(() => {
			this.props.history.replace(`/search/q=${input}`);
			this.props.search(input);

			if (input === '') {
				this.props.history.replace(`/`);
			}
		}, 1000);
	}

	resetInput() {
		this.setState({
			value: ''
		});
	}

	render() {
		return (
			<div className="nav-container">
				<Link to={'/'} onClick={this.resetInput}>
					<img className="netflix-logo" src={logo} />
				</Link>
				<div className="input-container">
					<input
						type="text"
						name="Search Titles"
						placeholder="Search Titles"
						autoComplete="off"
						className="input-bar"
						onChange={this.handleChange}
						value={this.state.value}
					/>
					{this.state.value === '' ? null : (
						<Link to={'/'} onClick={this.resetInput}>
							<i className="fas fa-times" />
						</Link>
					)}
				</div>
			</div>
		);
	}
}

export default AppNavbar;
