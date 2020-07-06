import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import GenreSliderContainer from '../containers/GenreSliderContainer';

class TvModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: true
		};

		this.toggle = this.toggle.bind(this);
		this.TrailersDisplay = this.TrailersDisplay.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	TrailersDisplay() {
		const { isFetching, error, trailersArr } = this.props.trailers;
		const {
			number_of_seasons,
			genres,
			name,
			first_air_date,
			overview,
			backdrop_path,
			created_by
		} = this.props.tvSeries;
		// if (this.props.tvSeries.seasons) {
		// 	this.props.tvSeries.seasons.map((season) => {
		// 		console.log(season);
		// 	});
		// }
		// if (this.props.tvSeries.created_by) {
		// 	this.props.tvSeries.created_by.map((creator) => {
		// 		this.setState({
		// 			creators: creator.name
		// 		});
		// 	});
		// }

		// console.log(this.state.creators);

		var trailer = trailersArr;
		var tvSeriesName = name;
		var tvSeriesReleaseDate = first_air_date;
		var seasons = number_of_seasons;
		var overviewDescription = overview;
		var backDropPoster = backdrop_path;

		if (seasons > 1) {
			seasons = `${seasons} seasons`;
		} else {
			seasons = `${seasons} season`;
		}

		return (
			<Modal
				contentClassName="custom-modal-style"
				isOpen={this.state.modal}
				toggle={this.toggle}
				backdrop={false}
			>
				<div className="description-container">
					<ModalHeader toggle={this.toggle}>
						<h1 className="tv_name">{tvSeriesName}</h1>
					</ModalHeader>
					<div className="details">
						<span>Release Date: {tvSeriesReleaseDate}</span>
						<span>{seasons}</span>
					</div>
					{/* <div className="creators">
						Created by :{' '}
						{created_by ? (
							created_by.map((creator) => {
								return <p>{creator.name}</p>;
							})
						) : null}
					</div> */}
					<p className="description">{overviewDescription}</p>

					{/* <div className="genres">
						Genres:
						{genres ? (
							genres.map((genre) => {
								return <p>{genre.name},</p>;
							})
						) : null}
					</div> */}
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
						<img src={`https://image.tmdb.org/t/p/w780//${backDropPoster}`} />
					) : (
						<iframe
							// key={trailer.id}
							scrolling="no"
							frameBorder="0"
							width="100%"
							height="430"
							src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
							allowFullScreen="allowFullScreen"
							allow="autoplay"
						/>
					)}
					<Link
						to={{
							pathname: `/`
						}}
						className="exit-modal"
					>
						<span aria-hidden="true">
							<i className="fas fa-times" />
						</span>
					</Link>
				</ModalBody>
			</Modal>
		);
	}

	render() {
		return (
			<div>
				{this.TrailersDisplay()} <GenreSliderContainer />
			</div>
		);
	}
}

export default TvModal;
