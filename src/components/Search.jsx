const Search =  ({search, searchInput, handleSearch}) =>{
    return(
        <div className="search">
            <input
                className="search-input"
                onChange={handleSearch}
                placeholder="buscar..."
                ref={searchInput}
                value={search}
                type="text"
            />
        {/* <input type="submit" className="search-btn"/> */}
        </div>
    )
}

export default Search;