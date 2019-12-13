import * as types from "./actionTypes";
import axios from "axios";

// Step 7: Design action creator functions
export const loadSmurfs = () => dispatch => {
	axios
		.get("http://localhost:3333/smurfs")
		.then(response => {
			dispatch({
				type: types.SET_SMURFS,
				payload: {
					smurfs: response.data
				}
			});
		})
		.catch(() => {
			console.log("error!!!");
		});
};

// Step 7: Design action creator functions
export const updateForm = ({ name, value }) => {
	return {
		type: types.UPDATE_FORM,
		payload: {
			name,
			value
		}
	};
};

// Step 7: Design action creator functions
export const saveForm = form => dispatch => {
	console.log(form);

	axios
		.post("http://localhost:3333/smurfs", form)
		.then(response => {
			console.log(response);

			dispatch({
				type: types.SAVE_FORM,
				payload: {
					form
				}
			});
			dispatch({
				type: types.SET_SMURFS,
				payload: {
					smurfs: response.data
				}
			});
		})
		.catch();
};

// Step 7: Design action creator functions
export const deleteSmurf = smurf => dispatch => {
	console.log("delete");
	console.log(smurf.id);

	axios
		.delete("http://localhost:3333/smurfs/" + smurf.id)
		.then(response => {
			dispatch({
				type: types.SET_SMURFS,
				payload: {
					smurfs: response.data
				}
			});
		})
		.catch();
};

export const updateSmurf = smurf => dispatch => {};
