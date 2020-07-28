import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTvShows } from '../actions';
import AppNavbar from '../components/AppNavbar';

function AppNavbarContainer(props) {
	const search = props.search;
	// console.log(props);
	return <AppNavbar search={search} history={props.history} match={props.match} />;
}

function mapDispatchToProps(dispatch) {
	return {
		search: (query) => dispatch(searchTvShows(query))
	};
}

export default connect(null, mapDispatchToProps)(AppNavbarContainer);
