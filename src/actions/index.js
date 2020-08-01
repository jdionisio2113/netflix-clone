import * as types from './types';
import API_KEY from '../config/api_key';
import endpoint from '../config/endpoint';
import regeneratorRuntime from 'regenerator-runtime';

export const getTrending = () => async (dispatch) => {
	dispatch({ type: types.FETCH_TRENDING });

	try {
		const response = await endpoint.get(`trending/tv/week?api_key=${API_KEY}`);

		dispatch({
			type: types.FETCHING_TRENDING_SUCCESS,
			genreData: response.data.results
		});
	} catch (err) {
		dispatch({
			type: types.REQUEST_FAILED,
			error: err.toString()
		});
	}
};

export const getGenres = (fetchingType, successType, failureType, genreId) => async (dispatch) => {
	dispatch({ type: fetchingType });
	try {
		const response = await endpoint.get(
			`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
		);

		dispatch({
			type: successType,
			genreData: response.data.results
		});
	} catch (err) {
		dispatch({
			type: failureType,
			error: err.toString()
		});
	}
};

export const fetchSingleTvShow = (id) => async (dispatch) => {
	dispatch({ type: types.FETCH_SINGLE_TVSHOW });

	try {
		const response = await endpoint.get(`tv/${id}?api_key=${API_KEY}&language=en-US`);

		dispatch({
			type: types.FETCH_SINGLE_TVSHOW_SUCCESS,
			tvSeries: response.data
		});
		dispatch(fetchTrailers(id));
	} catch (err) {
		dispatch({
			type: types.FETCH_SINGLE_TVSHOW_FAILURE,
			error: err.toString()
		});
	}
};

export const fetchTrailers = (id) => async (dispatch) => {
	dispatch({ type: types.FETCH_TRAILER });

	try {
		const response = await endpoint.get(`tv/${id}/videos?api_key=${API_KEY}`);

		dispatch({
			type: types.FETCH_TRAILER_SUCCESS,
			trailers: response.data.results[0]
		});
	} catch (err) {
		dispatch({
			type: types.FETCH_TRAILER_FAILURE,
			error: err.toString()
		});
	}
};

export const searchTvShows = (query) => async (dispatch) => {
	dispatch({ type: types.SEARCHING });

	try {
		const response = await endpoint.get(
			`search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
		);

		dispatch({
			type: types.SEARCHING_SUCCESS,
			query,
			tvShows: response.data.results
		});
	} catch (err) {
		dispatch({
			type: types.SEARCHING_FAILURE,
			error: err.toString()
		});
	}
};
