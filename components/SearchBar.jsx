import '../styles/searchBar.css'
import { useNavigate } from 'react-router-dom';

export function SearchBar () {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/feed'); 
  };
    return (
        <div className="search-bar">
        <input
          type="text"
          placeholder="Enter delivery address"
          className="search-input"
        />
        <button onClick={handleClick} className="search-btn">Search</button>
      </div>
    )
}