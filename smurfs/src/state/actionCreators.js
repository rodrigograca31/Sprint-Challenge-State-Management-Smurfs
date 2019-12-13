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
	// return
};

// Step 7: Design action creator functions
export const saveForm = form => dispatch => {};

// Step 7: Design action creator functions
export const deleteSmurf = smurf => dispatch => {
	// return
};

export const updateSmurf = smurf => dispatch => {};
