import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<header className="text-center p-3">
				<Link to="/">
					<h1 className="text-3xl mx-3 font-semibold">Contact Manager</h1>
				</Link>
			</header>
			<hr className="border-b-2" />
		</>
	);
}

export default Header;
