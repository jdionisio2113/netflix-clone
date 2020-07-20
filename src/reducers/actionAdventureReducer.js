import {
	FETCHING_ACTION_ADVENTURE,
	FETCHING_ACTION_ADVENTURE_SUCCESS,
	FETCHING_ACTION_ADVENTURE_FAILURE
} from '../actions/types';

export const actionAdventureInitialState = {
	isFetching: false,
	error: '',
	genreData: []
};

function actionAdventureReducer(state = actionAdventureInitialState, action) {
	switch (action.type) {
		case FETCHING_ACTION_ADVENTURE:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_ACTION_ADVENTURE_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_ACTION_ADVENTURE_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default actionAdventureReducer;
