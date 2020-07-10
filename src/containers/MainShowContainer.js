import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleTvShow } from '../actions';
// function MainShow(props) {
// 	var { genreData } = props;
// 	console.log(genreData[0]);
// 	if (genreData[0]) {
// 		var backDropPoster = genreData[0].backdrop_path;
// 		var mainShowName = genreData[0].original_name;
// 		var descriptionOverview = genreData[0].overview;
// 	}

// 	return (
// 		<div className="backdrop-container">
// 			<img src={`https://image.tmdb.org/t/p/w780//${backDropPoster}`} className="main_poster" />
// 			<div className="main-show-overview">
// 				<h1 className="main-show-title">{mainShowName}</h1>
// 				<p className="main-show-description">{descriptionOverview}</p>
// 			</div>
// 		</div>
// 	);
// }

class MainShowContainer extends Component {
	componentDidMount() {
		this.props.fetchSingleTvShow(this.props.id);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.id !== (this.props && this.props.id)) {
			this.props.fetchSingleTvShow(this.props.id);
		}
	}

	render() {
		const { trailers, tvSeries, isFetching } = this.props;
		var seasonNum = tvSeries.number_of_seasons;

		if (seasonNum > 1) {
			seasonNum = `${seasonNum} seasons`;
		} else {
			seasonNum = `${seasonNum} season`;
		}
		return (
			// isFetching ? <div className="loader"></div>
			<div className="backdrop-container">
				{/* <img
					className="main-show-poster"
					src={`https://image.tmdb.org/t/p/w780//${tvSeries.backdrop_path}`}
					className="main-show-poster"
				/> */}
				<div className="main-show-wrapper">
					<div className="main-show-overview">
						<img
							className="main-show-poster"
							src={`https://image.tmdb.org/t/p/w780//${tvSeries.backdrop_path}`}
						/>
						<div className="main-show">
							<h1 className="main-show-title">{tvSeries.name}</h1>
							<span>Release Date: {tvSeries.first_air_date}</span>
							<span>{seasonNum}</span>
							<p className="main-show-description">{tvSeries.overview}</p>
						</div>
						{/* <img src={`https://image.tmdb.org/t/p/w780//${tvSeries.poster_path}`} /> */}
					</div>
					<iframe
						// key={trailer.id}
						scrolling="no"
						frameBorder="0"
						width="46%"
						height="439px"
						// src={embed}
						src={`https://www.youtube.com/embed/${trailers.trailersArr.key}?`}
						allowFullScreen="allowFullScreen"
						// allow="autoplay"
					/>
				</div>
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(MainShowContainer);
