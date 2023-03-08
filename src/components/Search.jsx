const Search = ({ query, setQuery }) => {
    return (
        <div className="search">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
        </div>
    );
};

export default Search;
