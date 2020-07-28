import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleTvShow } from '../actions';
import TvModal from '../components/TvModal';

class TvModalContainer extends Component {
	componentDidMount() {
		this.props.fetchSingleTvShow(this.props.id);
	}

	render() {
		return <TvModal {...this.props} />;
	}
}

function mapStateToProps(state) {
	return {
		tvSeries: state.tvShow.tvSeries,
		error: state.tvShow.error,
		isFetching: state.tvShow.isFetching,
		trailers: state.tvShow.trailers
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchSingleTvShow }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TvModalContainer);
