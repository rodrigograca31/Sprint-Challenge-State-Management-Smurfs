import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { loadSmurfs, deleteSmurf, editSmurf } from "../state/actionCreators";
import AddSmurf from "./AddSmurf";

class App extends Component {
	componentDidMount() {
		this.props.loadSmurfs();
	}

	render() {
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your state management version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>

				<AddSmurf></AddSmurf>

				<h2>Smurfs: </h2>
				{this.props.smurfs.map(smurf => (
					<div className="smurf" key={smurf.id}>
						<div
							onClick={e => this.props.deleteSmurf(smurf)}
							className="btns"
						>
							🗑️
						</div>
						<div
							onClick={e => this.props.editSmurf(smurf)}
							className="btns"
						>
							✏️
						</div>
						<br />
						<b>ID:</b> {smurf.id} <br />
						<b>Name:</b> {smurf.name} <br />
						<b>Age:</b> {smurf.age} <br />
						<b>Height:</b> {smurf.height} <br />
					</div>
				))}
			</div>
		);
	}
}

// export default App;
export default connect(state => state, { loadSmurfs, deleteSmurf, editSmurf })(
	App
);
