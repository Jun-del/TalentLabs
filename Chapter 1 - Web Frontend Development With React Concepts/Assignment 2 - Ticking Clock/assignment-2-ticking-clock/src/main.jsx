import ReactDOM from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function tick() {
	const date = new Date().toLocaleDateString("en-GB");
	const time = new Date().toLocaleTimeString();

	const element = (
		<div>
			<h1>The current time is</h1>
			<h2>
				{date} {time}
			</h2>
		</div>
	);

	root.render(element);
}

setInterval(tick, 1000);
