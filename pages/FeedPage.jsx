import {FoodCategory} from '../components/FoodCategory';
import {NarrowBy} from "../components/NarrowBy"
import {ZeroDollarDeliveryFee} from '../components/ZeroDollarDeliveryFee';
import {AllRestaurants} from "../components/AllRestaurants";
import {Favourite} from "../components/Favourite";
import {RestaurantSkeletonCardDeck} from "../components/RestaurantSkeletonCardDeck";

export function Feedpage ({ restaurants, isLoading, updateSearchText }) {
    return (
        <>
            
            {isLoading && <RestaurantSkeletonCardDeck />}
            {/* <HeaderBody /> */}
            <FoodCategory updateSearchText={updateSearchText} />
            <NarrowBy restaurants={restaurants} />
            <ZeroDollarDeliveryFee restaurants={restaurants} />
            <Favourite restaurants={restaurants} />
            <AllRestaurants restaurants={restaurants} />
        </>
    )
}
