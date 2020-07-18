import React, { Component } from 'react';
import { all, get } from 'axios';

import API_KEY from '../config/api_key';
import endpoint from '../config/endpoint';

class MainShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trailerKey: '',
			id: '',
			backdrop: '',
			title: '',
			airDate: '',
			overview: '',
			seasonNum: ''
		};
	}

	componentDidMount() {
		endpoint
			.get(`trending/tv/week?api_key=${API_KEY}`)
			.then((response) => {
				this.setState({
					id: response.data.results[0].id
				});

				return endpoint.get(`tv/${this.state.id}?api_key=${API_KEY}&language=en-US`);
			})
			.then((res) => {
				var seasonNum = res.data.number_of_seasons;

				if (seasonNum > 1) {
					seasonNum = `${seasonNum} seasons`;
				} else {
					seasonNum = `${seasonNum} season`;
				}

				this.setState({
					backdrop: res.data.backdrop_path,
					title: res.data.name,
					airDate: res.data.first_air_date,
					overview: res.data.overview,
					seasonNum
				});

				return endpoint.get(`tv/${this.state.id}/videos?api_key=${API_KEY}`);
			})
			.then((res) => {
				this.setState({
					trailerKey: res.data.results[0].key
				});
			});
	}

	render() {
		const { trailerKey, backdrop, title, airDate, overview, seasonNum } = this.state;
		return (
			<div className="backdrop-container">
				<div className="main-show-wrapper">
					<div className="main-show-overview">
						<img className="main-show-poster" src={`https://image.tmdb.org/t/p/w780//${backdrop}`} />
						<div className="main-show">
							<h1 className="main-show-title">{title}</h1>
							<span>Release Date: {airDate}</span>
							<span>{seasonNum}</span>
							<p className="main-show-description">{overview}</p>
						</div>
					</div>
					<iframe
						scrolling="no"
						frameBorder="0"
						width="50%"
						height="439px"
						src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
						allowFullScreen="allowFullScreen"
						allow="autoplay"
					/>
				</div>
			</div>
		);
	}
}

export default MainShow;