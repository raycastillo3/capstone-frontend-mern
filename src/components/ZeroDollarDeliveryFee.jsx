import { Col, Row, Button } from "react-bootstrap";
import zeroFee from "../assets/zeroFee.svg"
import {ThreeColumnCarousel} from "./ThreeColumnCarousel";
import Countdown, { zeroPad } from 'react-countdown';
import { pillBtnStyle } from "../styles/Styles"

export function ZeroDollarDeliveryFee ({ restaurants }) {

    const heading =
        <Row className="mt-5">
            <Col xs={2}>
                <img src={zeroFee} alt="$0 delivery fee" />
            </Col>
            <Col>
                <h1>$0 Delivery Fee</h1>
                <p className="text-muted">Share a delivery partner with a nearby order</p>
            </Col>
        </Row>;

    const timeRemaining = <Button style={pillBtnStyle}>
        New options in <Countdown date={Date.now() + 500000} renderer={renderer} />
    </Button>

    let zeroDollarDeliveryFeeArray = [];

    restaurants.forEach(restaurant => {
        if (restaurant.freeDelivery === true) {
            zeroDollarDeliveryFeeArray.push(restaurant)
        }
    })

    return (
        <ThreeColumnCarousel restaurants={zeroDollarDeliveryFeeArray} heading={heading} timeRemaining={timeRemaining} />
    )
}

function renderer ({ minutes, seconds }) {
    return <span>{minutes}:{zeroPad(seconds)}</span>;
}

