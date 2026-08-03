function SearchBar({ searchTerm, onSearchChange }) {
  function handleChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search projects by title or category..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
