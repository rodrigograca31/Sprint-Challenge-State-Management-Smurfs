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
			return action.payload.smurfs;
		case types.SAVE_FORM:
			return smurfs;
		default:
			return smurfs;
	}
}

// STEP 3: create reducers
export function formReducer(form = initialState.form, action) {
	switch (action.type) {
		case types.UPDATE_FORM:
			console.log(action.payload);

			return {
				...form,
				[action.payload.name]: action.payload.value
			};
		case types.SAVE_FORM:
			return initialState.form;
		default:
			return form;
	}
}
