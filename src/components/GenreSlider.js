import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function GenreSlider(props) {
	var { genreData, genreTitle } = props;

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
		<div className="genre-slider-container">
			<h1 className="trending-title">{genreTitle}</h1>

			<Slider {...settings}>
				{genreData.map((movie) => {
					if (!movie.backdrop_path) return null;
					return (
						<Link to={`/Tv/${movie.id}`} key={movie.id}>
							{movie.backdrop_path ? (
								<img
									src={`https://image.tmdb.org/t/p/w780//${movie.backdrop_path}`}
									className="featured_poster"
								/>
							) : (
								<p className="imgReplacement">{movie.title}</p>
							)}
						</Link>
					);
				})}
			</Slider>
		</div>
	);
}

export default GenreSlider;
