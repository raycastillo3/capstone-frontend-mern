import {ResponsiveCardDeck} from "../components/ResponsiveCardDeck";
import {RestaurantCard} from "../components/RestaurantCard";
import { Container } from "react-bootstrap";

export function SortByCardDeckPage  ({ restaurants }) {
    const restaurantsByRating = restaurants.sort((a, b) => b.rating - a.rating)
    return (
        <>
            <Container>
                <h1>{restaurantsByRating.length} stores</h1>
            </Container>
            <ResponsiveCardDeck>
                {restaurantsByRating.map((restaurant, idx) => {
                    return <RestaurantCard key={idx} restaurant={restaurant} />
                })}
            </ResponsiveCardDeck>
        </>

    )
}