import {ThreeColumnCarousel} from "./ThreeColumnCarousel";

export function Favourite ({ restaurants }) {

    const heading =
        <h1>Your Favourites</h1>;

    const isFavouriteArray = [];

    restaurants.forEach(restaurant => {
        if (restaurant.isCustomerFavourite === true) {
            isFavouriteArray.push(restaurant)
        }
    })

    return (
        <ThreeColumnCarousel restaurants={isFavouriteArray} heading={heading} />
    )
}