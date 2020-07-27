import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchTvShows } from '../actions';
import Search from '../components/Search';

class SearchContainer extends Component {
	componentDidMount() {
		const query = this.props.match.params.search;
		this.props.search(query);
	}

	render() {
		// console.log(this.props);
		return <Search tvShows={this.props.tvShows} />;
	}
}

function mapStateToProps(state) {
	return {
		tvShows: state.search
	};
}

function mapDispatchToProps(dispatch) {
	return {
		search: (query) => dispatch(searchTvShows(query))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
