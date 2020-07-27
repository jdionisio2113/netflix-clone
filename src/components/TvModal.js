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
		this.TrailersDisplay = this.TrailersDisplay.bind(this);
	}

	toggleModal() {
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
			created_by,
			poster_path
		} = this.props.tvSeries;

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

		console.log(this.props);

		return (
			<Modal className="modal-container" isOpen={this.state.modal} toggle={this.toggleModal} backdrop={false}>
				<div className="modal-wrapper">
					<div className="description-container">
						<Link
							to={{
								pathname: `/`
							}}
							className="mobile-exit-modal"
						>
							{/* <button className="mobile-exit-modal" onClick={this.props.history.goBack}> */}
							<span aria-hidden="true">
								<i className="fas fa-times fa-2x" />
							</span>
							{/* </button> */}
						</Link>
						<ModalHeader toggle={this.toggleModal}>
							<h1 className="tv_name">{tvSeriesName}</h1>
						</ModalHeader>
						<div className="details">
							<span>Release Date: {tvSeriesReleaseDate}</span>
							<span>{seasons}</span>
						</div>
						<p className="description">{overviewDescription}</p>
					</div>

					<ModalBody>
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
						) : (
							<iframe
								scrolling="no"
								frameBorder="0"
								width="100%"
								height="430"
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
		return <div>{this.TrailersDisplay()}</div>;
	}
}

export default TvModal;
