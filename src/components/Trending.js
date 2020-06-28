import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import API_KEY from '../config/api_key';

function Trending(props) {
	const { trending } = props;

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
	return (
		<div>
			<h1 className="trending-title">Trending</h1>
			<Slider {...settings}>
				{trending.tvShows.map((show) => {
					var poster_path = show.backdrop_path;

					return (
						<Link
							to={{
								pathname: `/Tv/${show.id}`
							}}
							key={show.id}
						>
							<img
								className="featured_poster"
								key={show.id}
								src={`https://image.tmdb.org/t/p/w780//${poster_path}`}
								// alt={`Poster for ${title}`}
							/>
						</Link>
					);
				})}
			</Slider>
		</div>
	);
}

export default Trending;
