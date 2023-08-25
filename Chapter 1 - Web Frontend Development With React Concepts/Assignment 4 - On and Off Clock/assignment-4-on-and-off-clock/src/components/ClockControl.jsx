import React from "react";
import Clock from "./Clock";

function ClockControl() {
	const [isClockOn, setIsClockOn] = React.useState(true);

	const handleClockOn = () => {
		setIsClockOn(!isClockOn);
	};

	const buttonLabel = isClockOn ? "Turn off clock" : "Turn on clock";

	return (
		<div>
			<h1>Time Now:</h1>
			<button onClick={handleClockOn}>{buttonLabel}</button>
			{isClockOn ? <Clock /> : <h1>Clock is off</h1>}
		</div>
	);
}

export default ClockControl;
