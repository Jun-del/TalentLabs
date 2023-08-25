import React from "react";

function Clock() {
	const [time, setTime] = React.useState(
		new Date().toLocaleTimeString("it-IT")
	);

	React.useEffect(() => {
		const interval = setInterval(showDate, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [time]);

	function showDate() {
		setTime(new Date().toLocaleTimeString("it-IT"));
	}

	return (
		<div>
			<h1>Time Now:</h1>
			<h1>{time}</h1>
		</div>
	);
}

export default Clock;
