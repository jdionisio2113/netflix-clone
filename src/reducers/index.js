import { combineReducers } from 'redux';
import trendingReducer from './trendingReducer';
import tvModalReducer from './tvModalReducer';
import actionAdventureReducer from './actionAdventureReducer';
// import documentariesReducer from './documentaryReducer';
// import comediesReducer from './comediesReducer';
// import dramasReducer from './dramasReducer';
// import horrorReducer from './horrorReducer';
// import romanceReducer from './romanceReducer';
// import scifiReducer from './scifiReducer';
// import thrillerReducer from './thrillerReducer';

export default combineReducers({
	trending: trendingReducer,
	tvShow: tvModalReducer,
	actionAdventure: actionAdventureReducer
	// comedies: comediesReducer,
	// documentaries: documentariesReducer,
	// dramas: dramasReducer,
	// horror: horrorReducer,
	// romance: romanceReducer,
	// scifi: scifiReducer,
	// thriller: thrillerReducer
});
