import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

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
		var trailer = trailersArr;
		var tvSeriesName = this.props.tvSeries.name;
		var tvSeriesReleaseDate = this.props.tvSeries.first_air_date;
		var seasons = this.props.tvSeries.number_of_seasons;
		var overviewDescription = this.props.tvSeries.overview;
		var backDropPoster = this.props.tvSeries.backdrop_path;

		if (seasons > 1) {
			seasons = `${seasons} seasons`;
		} else {
			seasons = `${seasons} season`;
		}

		return (
			<Modal contentClassName="custom-modal-style" isOpen={this.state.modal} toggle={this.toggle}>
				<div className="description-container">
					<ModalHeader toggle={this.toggle}>
						<h1 className="tv_name">{tvSeriesName}</h1>
					</ModalHeader>
					<span>
						Release Date: {tvSeriesReleaseDate} / {seasons}
					</span>
					<p className="description">{overviewDescription}</p>
				</div>
				<ModalBody>
					{/* <Label for="item">Item</Label> */}
					<Link
						to={{
							pathname: `/`
						}}
					>
						<span aria-hidden="true">x</span>
					</Link>
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
				</ModalBody>
			</Modal>
		);
	}

	render() {
		return <div>{this.TrailersDisplay()}</div>;
	}
}

export default TvModal;
