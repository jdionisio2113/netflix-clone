import React from 'react';
import { Link } from 'react-router-dom';

function Search({ tvShows, isFetching }) {
	const tvShowData = tvShows.tvShows;
	return (
		<div className="tvshow_display-container">
			{tvShows.isFetching ? (
				<div className="loader" />
			) : (
				tvShowData.map((res) => {
					return (
						<Link to={`/Tv/${res.id}`} key={res.id}>
							{res.backdrop_path ? (
								<img
									src={`https://image.tmdb.org/t/p/w780//${res.backdrop_path}`}
									className="searched_poster"
								/>
							) : null}
						</Link>
					);
				})
			)}
		</div>
	);
}

export default Search;
