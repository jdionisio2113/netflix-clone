import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function GenreSlider(props) {
	var { genreData, genreTitle, isFetching } = props;

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
			{isFetching ? (
				<div className="loader" />
			) : (
				<Slider {...settings}>
					{genreData.map((tvShow) => {
						if (!tvShow.backdrop_path) return null;
						return (
							<Link to={`/${tvShow.id}`} key={tvShow.id}>
								{tvShow.backdrop_path ? (
									<img
										src={`https://image.tmdb.org/t/p/w780//${tvShow.backdrop_path}`}
										className="featured_poster"
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
