function BookList({ filteredBooks }) {
	if (filteredBooks.length === 0) {
		return (
			<div>
				<h1>No book found</h1>
			</div>
		);
	}

	return (
		<div>
			<ul>
				{filteredBooks.map((book) => (
					<li key={book.id}>{book.title}</li>
				))}
			</ul>
		</div>
	);
}

export default BookList;
