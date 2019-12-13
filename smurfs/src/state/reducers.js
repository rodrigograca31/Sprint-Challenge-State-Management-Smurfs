import * as types from "./actionTypes";

// STEP 1: Decide state slices
const initialState = {
	smurfs: [
		{
			id: 0,
			name: "Rodrigo",
			age: 26,
			height: "180cm"
		}
	],
	form: {
		name: "",
		age: 0,
		height: "1cm"
	}
};

// STEP 3: create reducers
export function smurfsReducer(smurfs = initialState.smurfs, action) {
	switch (action.type) {
		case types.SET_SMURFS:
			return smurfs;
		default:
			return smurfs;
	}
}

// STEP 3: create reducers
export function formReducer(form = initialState.form, action) {
	switch (action.types) {
		case types.UPDATE_FORM:
			return form;
		default:
			return form;
	}
}
