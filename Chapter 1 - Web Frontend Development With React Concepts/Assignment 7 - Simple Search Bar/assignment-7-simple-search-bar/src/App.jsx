import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

const BOOK_LISTS = [
	{
		id: 1,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		year: 1960,
	},
	{
		id: 2,
		title: "1984",
		author: "George Orwell",
		year: 1949,
	},
	{
		id: 3,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1925,
	},
	{
		id: 4,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		year: 1813,
	},
	{
		id: 5,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		year: 1951,
	},
	{
		id: 6,
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		year: 1954,
	},
	{
		id: 7,
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		year: 1937,
	},
	{
		id: 8,
		title: "The Chronicles of Narnia",
		author: "C.S. Lewis",
		year: 1950,
	},
];

function App() {
	const [searchTerm, setSearchTerm] = React.useState("");

	function handleSearch(event) {
		setSearchTerm(event.target.value);
	}

	const filteredBooks = BOOK_LISTS.filter((book) => {
		return book.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<div>
			<SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
			<BookList filteredBooks={filteredBooks} />
		</div>
	);
}

export default App;
