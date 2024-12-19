import vietnamese from "../assets/vietnamese.png"
import healthy from "../assets/healthy.png"
import halal from "../assets/halal.png"
import chinese from "../assets/chinese.png"
import thai from "../assets/thai.png"
import mexican from "../assets/mexican.png"
import japanese from "../assets/japanese.png"
import italian from "../assets/italian.png"
import indian from "../assets/indian.png"
import fastfood from "../assets/fastfood.png"
import comfortfood from "../assets/comfortfood.png"
import caribbean from "../assets/caribbean.png"
import bakery from "../assets/bakery.png"
import american from "../assets/american.png"
import { Container } from "react-bootstrap";
import { horizontalScrollMenuStyle, horizontalScrollMenuItemStyle } from "../styles/Styles"
import { useNavigate } from "react-router-dom";

export function FoodCategory ({ updateSearchText }) {

    const categories = [
        {
            title: "Comfort Food",
            image: comfortfood,
        },
        {
            title: "Indian",
            image: indian,
        },
        {
            title: "Thai",
            image: thai,
        },
        {
            title: "American",
            image: american,
        },
        {
            title: "Japanese",
            image: japanese,
        },
        {
            title: "Bakery",
            image: bakery,
        },
        {
            title: "Italian",
            image: italian,
        },
        {
            title: "Mexican",
            image: mexican,
        },
        {
            title: "Caribbean",
            image: caribbean,
        },
        {
            title: "Fast Food",
            image: fastfood,
        },
        {
            title: "Vietnamese",
            image: vietnamese,
        },
        {
            title: "Halal",
            image: halal,
        },
        {
            title: "Chinese",
            image: chinese,
        },
        {
            title: "Healthy",
            image: healthy,
        }
    ]
    const history = useNavigate();

    const onClick = (str) => {
        updateSearchText(str)

        const to = {
            pathname: `/search`,
            search: `?q=${str}`,
            state: { searchTerm: str }
        }

        history.push(to)
    }

    return (
        <Container className="horizontal-navbar" style={horizontalScrollMenuStyle}>
            {
                categories.map((item, index) => {
                    return (
                        <div onClick={() => onClick(item.title)} key={index} style={horizontalScrollMenuItemStyle}>
                            <img height="60px" src={item.image} alt={item.title} />
                            <div>{item.title}</div>
                        </div>
                    )
                })
            }
        </Container>
    )
}

