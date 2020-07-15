import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTrending } from '../actions';
import GenreSlider from '../components/GenreSlider';
import MainShowContainer from './MainShowContainer';

class TrendingContainer extends Component {
	componentDidMount() {
		this.props.getTrending();
	}

	render() {
		if (this.props.genreData[0]) {
			var id = this.props.genreData[0].id;
		}
		return (
			<div>
				<MainShowContainer id={id} genreData={this.props.genreData} />
				<GenreSlider
					genreTitle={'Trending Now'}
					isFetching={this.props.isFetching}
					error={this.props.error}
					genreData={this.props.genreData}
				/>
			</div>
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
