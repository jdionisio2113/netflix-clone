// import axios from 'axios';
import { FETCH_TRENDING, FETCHING_TRENDING_SUCCESS, FETCHING_TRENDING_FAILURE } from './types';
import API_KEY from '../config/api_key';
import endpoint from '../config/endpoint';
import regeneratorRuntime from 'regenerator-runtime';

export const getTrending = () => async (dispatch) => {
	dispatch({ type: FETCH_TRENDING });

	try {
		const response = await endpoint.get(`trending/tv/week?api_key=${API_KEY}`);

		setTimeout(() => {
			dispatch({
				type: FETCHING_TRENDING_SUCCESS,
				payload: response.data.results
			});
		}, 1000);
	} catch (err) {
		dispatch({
			type: REQUEST_FAILED,
			error: err.toString()
		});
	}
};
