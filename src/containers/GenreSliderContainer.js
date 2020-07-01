import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getGenres } from '../actions';
import * as types from '../actions/types';
import GenreSlider from '../components/GenreSlider';
import TrendingContainer from './TrendingContainer';

class GenreSliderContainer extends Component {
	componentDidMount() {
		this.props.getGenres(
			types.FETCHING_ACTION_ADVENTURE,
			types.FETCHING_ACTION_ADVENTURE_SUCCESS,
			types.FETCHING_ACTION_ADVENTURE_FAILURE,
			28
		);
	}

	render() {
		const { actionAdventure } = this.props;
		return (
			<div>
				<TrendingContainer />
				<GenreSlider
					genreTitle={'Action & Adventure'}
					isFetching={actionAdventure.isFetching}
					error={actionAdventure.error}
					genreData={actionAdventure.genreData}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		actionAdventure: state.actionAdventure
	};
}

export default connect(mapStateToProps, { getGenres })(GenreSliderContainer);
