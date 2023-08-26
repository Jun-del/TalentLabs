function SearchBar({ searchTerm, handleSearch }) {
	return (
		<div>
			<label htmlFor="search-term" name="search">
				Search:{" "}
			</label>
			<input
				type="text"
				id="search-term"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	);
}

export default SearchBar;
