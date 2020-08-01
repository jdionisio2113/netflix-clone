import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import TvModalContainer from '../containers/TvModalContainer';

function GenreSlider(props) {
	var { genreData, genreTitle, isFetching, match } = props;

	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		// nextArrow: <SampleNextArrow />,
		// prevArrow: <SamplePrevArrow />,
		speed: 1000,
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	};

	var pauseMainShowIframe = () => {
		var iframe = document.querySelector('.main-show-iframe');
		iframe.contentWindow.postMessage(
			JSON.stringify({
				event: 'command',
				func: 'stopVideo'
			}),
			'*'
		);
	};

	return (
		<div className="genre-slider-container">
			<h1 className="genre-title">{genreTitle}</h1>
			{isFetching ? (
				<div className="loader" />
			) : (
				<Slider {...settings}>
					{genreData.map((tvShow) => {
						if (!tvShow.poster_path) return null;
						return (
							<Link to={`/${tvShow.id}`} key={tvShow.id} id="show-link">
								{tvShow.poster_path ? (
									<img
										src={`https://image.tmdb.org/t/p/w300//${tvShow.poster_path}`}
										className="featured_poster"
										onClick={pauseMainShowIframe}
									/>
								) : (
									<p className="imgReplacement">{tvShow.title}</p>
								)}
							</Link>
						);
					})}
				</Slider>
			)}
		</div>
	);
}

export default GenreSlider;
