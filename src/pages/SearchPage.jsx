import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { ResponsiveCardDeck } from "../components/ResponsiveCardDeck";
import { RestaurantCard } from "../components/RestaurantCard";
import { useLocation } from "react-router-dom";
import { AllRestaurants } from "../components/AllRestaurants";
import * as JsSearch from "js-search";
import { FeedNavbar } from "../components/FeedNavbar";

export function SearchPage({ restaurants, updateSearchText }) {
  let search = new JsSearch.Search("restaurantId");
  search.addIndex("restaurantName");
  search.addIndex("restaurantSpecialty");
  search.addDocuments(restaurants);

  let location = useLocation();
  const searchTerm = location?.state?.searchTerm;
  const searchRes = search.search(searchTerm);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <FeedNavbar />
      <Container>
        {searchRes.length === 0 && (
          <>
            <p className="ml-3 lead">
              We couldn't find anything matching {`"${searchTerm}"`}. Browse all
              restaurants below.
            </p>
            <AllRestaurants restaurants={restaurants} />
          </>
        )}
        {searchRes.length > 0 && (
          <h2 className="ml-3">
            {searchRes.length} {searchRes.length > 1 ? `results` : `result`} for{" "}
            {searchTerm}
          </h2>
        )}
        {searchRes.length > 0 && (
          <ResponsiveCardDeck>
            {searchRes.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.restaurantId}
                  restaurant={restaurant}
                />
              );
            })}
          </ResponsiveCardDeck>
        )}
      </Container>
    </>
  );
}
