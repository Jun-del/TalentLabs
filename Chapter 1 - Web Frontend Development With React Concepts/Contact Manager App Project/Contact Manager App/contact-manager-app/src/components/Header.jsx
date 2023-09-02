import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="z-50 p-3 text-center">
        <Link to="/">
          <h1 className="mx-3 text-3xl font-semibold">Contact Manager</h1>
        </Link>
      </header>
      <hr className="border-b-2" />
    </>
  );
}

export default Header;
