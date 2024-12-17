import {FoodCategory} from '../components/FoodCategory';
import {NarrowBy} from "../components/NarrowBy"
import {ZeroDollarDeliveryFee} from '../components/ZeroDollarDeliveryFee';
import {AllRestaurants} from "../components/AllRestaurants";
import {Favourite} from "../components/Favourite";
import {RestaurantSkeletonCardDeck} from "../components/RestaurantSkeletonCardDeck";
import { FeedNavbar } from '../components/FeedNavbar';
import { useState } from 'react';

export function Feedpage ({ restaurants, isLoading}) {

  const [searchText, setSearchText] = useState("");

  const updateSearchText = (str) => {
    setSearchText(str);
  }

    return (
        <>
            {isLoading && <RestaurantSkeletonCardDeck />}
            <FeedNavbar searchText={searchText} updateSearchText={updateSearchText} />
            {/* <HeaderBody /> */}
            <FoodCategory updateSearchText={updateSearchText} />
            <NarrowBy restaurants={restaurants} />
            <ZeroDollarDeliveryFee restaurants={restaurants} />
            <Favourite restaurants={restaurants} />
            <AllRestaurants restaurants={restaurants} />
        </>
    )
}
