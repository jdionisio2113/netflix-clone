import { combineReducers } from 'redux';
import trendingReducer from './trendingReducer';
import tvModalReducer from './tvModalReducer';
import actionAdventureReducer from './actionAdventureReducer';
import documentariesReducer from './documentariesReducer';
import comediesReducer from './comediesReducer';
import dramasReducer from './dramasReducer';
import kidsReducer from './kidsReducer';
import scifiReducer from './scifiReducer';
import familyReducer from './familyReducer';

export default combineReducers({
	trending: trendingReducer,
	tvShow: tvModalReducer,
	actionAdventure: actionAdventureReducer,
	comedies: comediesReducer,
	documentaries: documentariesReducer,
	dramas: dramasReducer,
	kids: kidsReducer,
	scifi: scifiReducer,
	family: familyReducer
});
