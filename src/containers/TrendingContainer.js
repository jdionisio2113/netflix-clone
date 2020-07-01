import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTrending } from '../actions';
import GenreSlider from '../components/GenreSlider';

class TrendingContainer extends Component {
	componentDidMount() {
		this.props.getTrending();
	}

	render() {
		return (
			<GenreSlider
				genreTitle={'Trending Now'}
				isFetching={this.props.isFetching}
				error={this.props.error}
				genreData={this.props.genreData}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.trending.error,
		isFetching: state.trending.isFetching,
		genreData: state.trending.genreData
	};
};

export default connect(mapStateToProps, { getTrending })(TrendingContainer);
