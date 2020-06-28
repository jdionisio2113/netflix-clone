import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

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

		return (
			<Modal contentClassName="custom-modal-style" isOpen={this.state.modal} toggle={this.toggle}>
				<div className="show-description">
					<ModalHeader toggle={this.toggle}>{this.props.film.name}</ModalHeader>
					<p>asdfjnasdjkfnskj.fn</p>
				</div>
				<ModalBody>
					{/* <Label for="item">Item</Label> */}
					<button type="button" className="close" aria-label="Close" onClick={this.props.history.goBack}>
						<span aria-hidden="true">x</span>
					</button>
					<iframe
						key={trailer.id}
						scrolling="no"
						frameBorder="0"
						width="100%"
						height="430"
						src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
						allowFullScreen="allowFullScreen"
						allow="autoplay"
					/>
				</ModalBody>
			</Modal>
		);
	}

	render() {
		return <div>{this.TrailersDisplay()}</div>;
	}
}

export default TvModal;
