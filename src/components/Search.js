import React from 'react';
import { Link } from 'react-router-dom';

function Search(props) {
	const { tvShows } = props;
	const tvShowData = tvShows.tvShows;
	const search = props.match.params.search;

	if (tvShows.tvShows === undefined || tvShows.tvShows == 0) {
		tvShows.error = 'No match found. Please try again.';
		return <h1 className="error-message">{tvShows.error}</h1>;
	}
	return (
		<div className="tvshow_display-container">
			{tvShows.isFetching ? (
				<div className="loader" />
			) : (
				tvShowData.map((tvShow) => {
					var id = tvShow.id;
					return (
						<Link to={`/search/q=${search}/${tvShow.id}`} key={tvShow.id}>
							{tvShow.backdrop_path ? (
								<img
									src={`https://image.tmdb.org/t/p/w780//${tvShow.poster_path}`}
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
