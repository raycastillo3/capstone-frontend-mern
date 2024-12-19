import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { RestaurantMenuPage } from "./pages/RestaurantMenuPage";
import { Feedpage } from './pages/FeedPage';

import { getMenuUrl } from "./utils/Functions";
import { SortByCardDeckPage } from './pages/SortByCardDeckPage';
import { SearchPage } from "./pages/SearchPage";
import { LandingPage } from './pages/LandingPage';
import {Footer} from "./components/Footer";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  const updateSearchText = (str) => {
    setSearchText(str);
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://snackoverflow-server.onrender.com');
      // console.log(response.data);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData()
  }, []);

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="App">
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <LandingPage
              restaurants={data}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/feed"
          element={
            <Feedpage
              restaurants={data}
              isLoading={isLoading}
              updateSearchText={updateSearchText}
            />
          }
        />

        {/* Dynamic Restaurant Menu Routes */}
        {data.map((restaurant) => (
          <Route
            key={restaurant.restaurantId}
            path={`/${getMenuUrl(restaurant.restaurantName)}`}
            element={<RestaurantMenuPage restaurant={restaurant} />}
          />
        ))}

        {/* Sort By Rating Route */}
        <Route
          path="/sort-by-rating"
          element={
            <SortByCardDeckPage restaurants={data} />
          }
        />

        {/* Search Page Route */}
        <Route
          path="/search"
          element={
            <SearchPage
              restaurants={data}
              searchText={searchText}
              updateSearchText={updateSearchText}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
