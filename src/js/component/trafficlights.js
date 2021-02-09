import React from "react";

export default class trafficLights extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		let redExtraClass = "";
		if (this.state.clickedLight == "red") redExtraClass = "selected";
		let yellowExtraClass = "";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";

		return (
			<div>
				<div id="trafficTop"></div>
				<div id="container"></div>
				<div
					className={"red lights " + redExtraClass}
					onClick={() =>
						this.setState({ clickedLight: "red" })
					}></div>
				<div
					className={"yellow lights " + yellowExtraClass}
					onClick={() =>
						this.setState({ clickedLight: "yellow" })
					}></div>
				<div
					className={"green lights " + greenExtraClass}
					onClick={() =>
						this.setState({ clickedLight: "green" })
					}></div>
			</div>
		);
	}
}
