import '../styles/searchBar.css'

export function SearchBar () {
    return (
        <div className="search-bar">
        <input
          type="text"
          placeholder="Enter delivery address"
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>
    )
}