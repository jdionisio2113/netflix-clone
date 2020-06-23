import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// // import "./index.css";
import { Provider } from 'react-redux';
// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import reducers from './reducers';
import App from './components/App';

// render(<App />, document.getElementById('root'));

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { render } from 'react-dom';

const initialState = {};

const middleware = [ thunk ];

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
