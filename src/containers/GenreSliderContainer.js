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

		this.props.getGenres(
			types.FETCHING_COMEDIES,
			types.FETCHING_COMEDIES_SUCCESS,
			types.FETCHING_COMEDIES_FAILURE,
			35
		);

		this.props.getGenres(
			types.FETCHING_DOCUMENTARIES,
			types.FETCHING_DOCUMENTARIES_SUCCESS,
			types.FETCHING_DOCUMENTARIES_FAILURE,
			99
		);

		this.props.getGenres(types.FETCHING_DRAMAS, types.FETCHING_DRAMAS_SUCCESS, types.FETCHING_DRAMAS_FAILURE, 18);

		this.props.getGenres(types.FETCHING_SCIFI, types.FETCHING_SCIFI_SUCCESS, types.FETCHING_SCIFI_FAILURE, 10765);

		this.props.getGenres(
			types.FETCHING_FAMILY,
			types.FETCHING_FAMILY_SUCCESS,
			types.FETCHING_FAMILY_FAILURE,
			10751
		);

		this.props.getGenres(types.FETCHING_KIDS, types.FETCHING_KIDS_SUCCESS, types.FETCHING_KIDS_FAILURE, 10762);
	}

	render() {
		const { actionAdventure, comedies, documentaries, dramas, scifi, family, kids } = this.props;

		return (
			<div>
				<TrendingContainer />
				<GenreSlider
					genreTitle={'Action & Adventure'}
					isFetching={actionAdventure.isFetching}
					error={actionAdventure.error}
					genreData={actionAdventure.genreData}
				/>
				<GenreSlider
					genreTitle={'Comedies'}
					isFetching={comedies.isFetching}
					error={comedies.error}
					genreData={comedies.genreData}
				/>
				<GenreSlider
					genreTitle={'Documentaries'}
					isFetching={documentaries.isFetching}
					error={documentaries.error}
					genreData={documentaries.genreData}
				/>
				<GenreSlider
					genreTitle={'Dramas'}
					isFetching={dramas.isFetching}
					error={dramas.error}
					genreData={dramas.genreData}
				/>
				<GenreSlider
					genreTitle={'Sci-Fi & Fantasy'}
					isFetching={scifi.isFetching}
					error={scifi.error}
					genreData={scifi.genreData}
				/>
				<GenreSlider
					genreTitle={'Family'}
					isFetching={family.isFetching}
					error={family.error}
					genreData={family.genreData}
				/>
				<GenreSlider
					genreTitle={'Kids'}
					isFetching={kids.isFetching}
					error={kids.error}
					genreData={kids.genreData}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		actionAdventure: state.actionAdventure,
		comedies: state.comedies,
		documentaries: state.documentaries,
		dramas: state.dramas,
		scifi: state.scifi,
		family: state.family,
		kids: state.kids
	};
}

export default connect(mapStateToProps, { getGenres })(GenreSliderContainer);
