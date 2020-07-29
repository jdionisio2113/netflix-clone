import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchTvShows } from '../actions';
import Search from '../components/Search';
import TvModalContainer from './TvModalContainer';

class SearchContainer extends Component {
	componentDidMount() {
		const query = this.props.match.params.search;
		this.props.search(query);
	}

	render() {
		var id = this.props.match.params.id;
		return (
			<div>
				{this.props.match.params.id ? <TvModalContainer id={id} /> : null}
				<Search {...this.props} />
			</div>
		);
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
