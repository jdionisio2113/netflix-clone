import { FETCHING_GENRE, FETCHING_GENRE_SUCCESS, FETCHING_GENRE_FAILURE, DISPLAY_NEXT_BATCH } from '../actions/types';
import { actionAdventureInitialState, actionAdventureReducer } from './actionAdventureReducer';

const initialState = {
	slider_to_display: actionAdventureInitialState,
	// genreData: [],
	isFetching: true,
	error: ''
};

function genreSliderReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_GENRE:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_GENRE_SUCCESS:
			return {
				...state,
				isFetching: false
				// slider_to_display:  actionAdventureReducer
				// genreData: action.genreData
			};
		case FETCHING_GENRE_FAILURE:
			return {
				...state,
				isFetching: true,
				error: action.error
			};
		case FETCHING_GENRE:
		case FETCHING_GENRE_SUCCESS:
			// get reducers of different genres and store them in slider_to_display
			// then scroll to bottom of page and grab genres one by one
			return {
				...state,
				slider_to_display: actionAdventureReducer(state.slider_to_display, action)
			};

		default:
			return state;
	}
}

export default genreSliderReducer;
