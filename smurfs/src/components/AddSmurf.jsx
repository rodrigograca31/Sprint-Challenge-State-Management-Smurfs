import React from "react";
import { connect } from "react-redux";

import { updateForm, saveForm } from "../state/actionCreators";

export const AddSmurf = ({ form, updateForm, saveForm }) => {
	const formSubmit = e => {
		e.preventDefault();
		saveForm(form);
	};

	const onValueChange = e => {
		const { name, value } = e.target;
		updateForm({ name, value });
	};
	return (
		<div>
			{JSON.stringify(form)}
			<h2>Add: </h2>
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
			</form>
		</div>
	);
};

export default connect(state => state, { updateForm, saveForm })(AddSmurf);
