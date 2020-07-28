import React from 'react';
import { Link } from 'react-router-dom';

function Search(props) {
	const { tvShows } = props;
	const tvShowData = tvShows.tvShows;
	var search = props.match.params.search;

	return (
		<div className="tvshow_display-container">
			{tvShows.isFetching ? (
				<div className="loader" />
			) : (
				tvShowData.map((res) => {
					var id = res.id;
					return (
						<Link to={`/search/q=${search}/${res.id}`} key={res.id}>
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
