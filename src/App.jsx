import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { RestaurantMenuPage } from "../pages/RestaurantMenuPage";
import { Feedpage } from '../pages/FeedPage';
import ubereatsData from "../mock_data/restaurants.json";
import { getMenuUrl } from "../utils/Functions";
import { SortByCardDeckPage } from '../pages/SortByCardDeckPage';
import { SearchPage } from "../pages/SearchPage";
import { LandingPage } from '../pages/LandingPage';
import {Footer} from "../components/Footer";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (str) => {
    setSearchText(str);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setRestaurants(ubereatsData);
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <LandingPage
              restaurants={restaurants}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/feed"
          element={
            <Feedpage
              restaurants={restaurants}
              isLoading={isLoading}
              updateSearchText={updateSearchText}
            />
          }
        />

        {/* Dynamic Restaurant Menu Routes */}
        {restaurants.map((restaurant) => (
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
            <SortByCardDeckPage restaurants={restaurants} />
          }
        />

        {/* Search Page Route */}
        <Route
          path="/search"
          element={
            <SearchPage
              restaurants={restaurants}
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
