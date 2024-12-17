import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export function ThreeColumnCarousel ({ restaurants, heading, timeRemaining }) {

    return (
        <Container className="px-0">
            <RenderSliderRestaurantsCardDeck restaurants={restaurants} heading={heading} timeRemaining={timeRemaining} />
        </Container>
    )
}

function RenderSliderRestaurantsCardDeck ({ restaurants, heading, timeRemaining }) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    let numOfvisibleSlides, step, naturalSlideHeight;

    if (width < 321) {
        numOfvisibleSlides = 1;
        step = 1;
        naturalSlideHeight = 480;
    } else if (width < 576) {
        numOfvisibleSlides = 1;
        step = 1;
        naturalSlideHeight = 360;
    } else if (width < 768) {
        numOfvisibleSlides = 1;
        step = 1;
        naturalSlideHeight = 300;
    } else if (width < 992) {
        numOfvisibleSlides = 2;
        step = 2;
        naturalSlideHeight = 400;
    } else if (width < 1200) {
        numOfvisibleSlides = 3;
        step = 3;
        naturalSlideHeight = 480;
    } else {
        numOfvisibleSlides = 3;
        step = 3;
        naturalSlideHeight = 400;
    }

    return <SliderRestaurantsCardDeck restaurants={restaurants} numOfvisibleSlides={numOfvisibleSlides} step={step} naturalSlideHeight={naturalSlideHeight}
        heading={heading} timeRemaining={timeRemaining}
    />

}

function SliderRestaurantsCardDeck ({ restaurants, numOfvisibleSlides, step, naturalSlideHeight, heading, timeRemaining }) {
    const totalSlides = countNumOfFreeDeliveryRestaurants(restaurants);

    return (
        <CarouselProvider
            visibleSlides={numOfvisibleSlides}
            totalSlides={totalSlides}
            step={step}
            naturalSlideWidth={400}
            naturalSlideHeight={naturalSlideHeight}
        >
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={5}>
                        {heading}
                    </Col>
                    <Col className="my-auto">
                        {timeRemaining}
                    </Col>
                    <div className="d-flex justify-content-end pr-3 ">
                        <ButtonBack className="border-0 bg-white pb-0"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" /></ButtonBack>
                        <ButtonNext className="border-0 bg-white pb-0 pr-0"><FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" /></ButtonNext>
                    </div>
                </Row>
            </Container>
            <Slider>
                {restaurants.map((restaurant, index) => {
                    return (
                        <Slide key={restaurant.restaurantId} >
                            <RestaurantCard index={index} restaurant={restaurant} />
                        </Slide>
                    )
                })}
            </Slider>
        </CarouselProvider>
    )
}

function countNumOfFreeDeliveryRestaurants (arr) {
    let count = 0;
    arr.forEach(location => {
        if (location.freeDelivery) {
            count++;
        }
    })

    return count;
}

