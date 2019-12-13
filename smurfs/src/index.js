import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { smurfsReducer, formReducer } from "./state/reducers";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Step 4: Use "combineReducers" to make a monster reducer
const monsterReducer = combineReducers({
	smurfs: smurfsReducer,
	form: formReducer
});

// Step 5: use "createStore" to make a redux store
const store = createStore(
	monsterReducer, // we need the second arg to enable redux devtools
	{},
	compose(
		applyMiddleware(thunk /* ,etc , other middlewares */),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	// Step 6: use "Provider" to inject the store into the app
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
