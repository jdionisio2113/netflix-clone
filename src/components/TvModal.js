import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import GenreSliderContainer from '../containers/GenreSliderContainer';

class TvModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: true,
			seasons: false
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleSeasons = this.toggleSeasons.bind(this);
		this.TrailersDisplay = this.TrailersDisplay.bind(this);
		// this.seasonsDisplay = this.seasonsDisplay.bind(this);
	}

	toggleModal() {
		this.setState({
			modal: !this.state.modal
		});
	}

	toggleSeasons() {
		this.setState({
			seasons: !this.state.seasons
		});
	}

	// seasonsDisplay() {
	// 	const { tvSeries } = this.props;

	// 	const seasonsArr = tvSeries.seasons.shift();

	// 	return tvSeries.seasons.map((season) => {
	// 		return <img className="season-posters" src={`https://image.tmdb.org/t/p/w300//${season.poster_path}`} />;
	// 	});
	// }

	TrailersDisplay() {
		const { isFetching, error, trailersArr } = this.props.trailers;
		const {
			number_of_seasons,
			genres,
			name,
			first_air_date,
			overview,
			backdrop_path,
			created_by,
			poster_path
		} = this.props.tvSeries;

		var trailer = trailersArr;
		var tvSeriesName = name;
		var tvSeriesReleaseDate = first_air_date;
		var seasons = number_of_seasons;
		var overviewDescription = overview;
		var backDropPoster = backdrop_path;
		var createdByArr = [];
		var creators;
		// var arr = [];
		// var embed;

		// trailer.map((trailer) => {
		// 	// console.log(trailer.key);
		// 	arr.push(trailer.key);
		// });

		// if (!arr[1]) {
		// 	embed = `https://www.youtube.com/embed/${arr[0]}?autoplay=1`;
		// } else {
		// 	embed = `https://www.youtube.com/embed/${arr[1]}?autoplay=1`;
		// }

		if (seasons > 1) {
			seasons = `${seasons} seasons`;
		} else {
			seasons = `${seasons} season`;
		}

		return (
			<Modal
				// contentClassName="custom-modal-style"
				className="modal-container"
				isOpen={this.state.modal}
				toggle={this.toggleModal}
				backdrop={false}
			>
				<div className="modal-wrapper">
					<div className="description-container">
						<Link
							to={{
								pathname: `/`
							}}
							className="mobile-exit-modal"
						>
							<span aria-hidden="true">
								<i className="fas fa-times fa-2x" />
							</span>
						</Link>
						<ModalHeader toggle={this.toggleModal}>
							<h1 className="tv_name">{tvSeriesName}</h1>
						</ModalHeader>
						<div className="details">
							<span>Release Date: {tvSeriesReleaseDate}</span>
							{/* <button onClick={this.toggleSeasons}> */}
							<span>{seasons}</span>
							{/* </button> */}
						</div>
						<p className="description">{overviewDescription}</p>
					</div>

					<ModalBody>
						{/* <Label for="item">Item</Label> */}
						{/* <Link
						to={{
							pathname: `/`
						}}
						className="exit-modal"
					>
						<span aria-hidden="true">
							<i class="fas fa-times fa-2x" />
						</span>
					</Link> */}
						{!trailer ? (
							<div>
								<img
									className="mobile-poster"
									src={`https://image.tmdb.org/t/p/w300//${poster_path}`}
								/>
								<img
									className="desktop-poster"
									src={`https://image.tmdb.org/t/p/w780//${backDropPoster}`}
								/>
							</div>
						) : this.state.seasons ? (
							<div className="seasons-container">{this.seasonsDisplay()}</div>
						) : (
							<iframe
								// key={trailer.id}
								scrolling="no"
								frameBorder="0"
								width="100%"
								height="430"
								// src={embed}
								src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
								allowFullScreen="allowFullScreen"
								allow="autoplay"
							/>
						)}
					</ModalBody>
				</div>
				<Link
					to={{
						pathname: `/`
					}}
					className="desktop-exit-modal"
				>
					<span aria-hidden="true">
						<i className="fas fa-times" />
					</span>
				</Link>
			</Modal>
		);
	}

	render() {
		return (
			<div>
				{this.TrailersDisplay()}
				{/* <GenreSliderContainer /> */}
			</div>
		);
	}
}

export default TvModal;
