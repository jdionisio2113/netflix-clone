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
		// console.log(this.props.genreData);
		// const mainShow = this.props.genreData.shift();
				if (this.props.genreData[9]) {
			var id = this.props.genreData[9].id;
			// var backDropPoster = this.props.genreData[0].backdrop_path;
			// var mainShowName = this.props.genreData[0].original_name;
			// var descriptionOverview = this.props.genreData[0].overview;
		}
		return (
			<>	
				<MainShowContainer id={id} />
				<GenreSlider
					genreTitle={'Trending Now'}
					isFetching={this.props.isFetching}
					error={this.props.error}
					genreData={this.props.genreData}
				/>
			</>
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
