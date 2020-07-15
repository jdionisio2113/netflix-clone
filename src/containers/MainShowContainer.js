import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleTvShow } from '../actions';
// import { fetchMainShow } from '../actions';

class MainShowContainer extends Component {
	constructor(props) {
		super(props);

		this.displayMainShow = this.displayMainShow.bind(this);
	}
	componentDidMount() {
		this.props.fetchSingleTvShow(this.props.id);
		// this.props.fetchMainShow();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.id !== (this.props && this.props.id)) {
			this.props.fetchSingleTvShow(this.props.id);
		}
	}

	displayMainShow() {
		const { trailers, tvSeries, isFetching, genreData } = this.props;
		var seasonNum = tvSeries.number_of_seasons;
		console.log(trailers);

		if (seasonNum > 1) {
			seasonNum = `${seasonNum} seasons`;
		} else {
			seasonNum = `${seasonNum} season`;
		}
		return (
			// isFetching ? <div className="loader"></div>
			// <div>MainSHow</div>
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
						src={`https://www.youtube.com/embed/${trailers.trailersArr.key}`}
						allowFullScreen="allowFullScreen"
						// allow="autoplay"
					/>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.displayMainShow()}</div>;
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
