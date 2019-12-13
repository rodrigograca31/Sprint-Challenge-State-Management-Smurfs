import React from "react";
import { connect } from "react-redux";

import { updateForm, saveForm } from "../state/actionCreators";

export const AddSmurf = ({ form, updateForm, saveForm, clearForm }) => {
	const formSubmit = e => {
		e.preventDefault();

		// should check if an id exists here and call updateSmurf()
		saveForm(form);
	};

	const onValueChange = e => {
		const { name, value } = e.target;
		updateForm({ name, value });
	};
	return (
		<div>
			<h2>Add: </h2>
			{JSON.stringify(form)}
			<br />
			<br />
			<form action="" onSubmit={e => formSubmit(e)}>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					value={form.name}
					onChange={onValueChange}
					name="name"
				/>
				<br />
				<label htmlFor="age">Age: </label>
				<input
					type="number"
					value={form.age}
					onChange={onValueChange}
					name="age"
				/>
				<br />
				<label htmlFor="height">Height: </label>
				<input
					type="text"
					value={form.height}
					onChange={onValueChange}
					name="height"
				/>
				<br />
				<input type="submit" value="Save" />
				<input type="button" value="Clear" onClick={e => clearForm} />
			</form>
		</div>
	);
};

export default connect(state => state, { updateForm, saveForm, clearForm })(
	AddSmurf
);
