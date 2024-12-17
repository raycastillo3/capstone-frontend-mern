import {ResponsiveCardDeck} from "./ResponsiveCardDeck";
import {RestaurantCard} from "./RestaurantCard";

export function AllRestaurants ({ restaurants }) {
    return (
        <ResponsiveCardDeck>
            {restaurants.map(restaurant => {
                return <RestaurantCard key={restaurant.restaurantId} restaurant={restaurant} />
            })}
        </ResponsiveCardDeck>
    )
}




 