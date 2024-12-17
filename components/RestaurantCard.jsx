import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMenuUrl, getPriceRangeSpan, getHeartIcon, getDeliveryFeeSpan, getDeliveryTimeSpan, getRatingSpan } from "../utils/Functions.jsx";

export function RestaurantCard ({ restaurant }) {
    const bullet = " \u2022 ";
    return (
        <Col className="mt-4">
            <Link to={`/${getMenuUrl(restaurant.restaurantName)}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card className="restaurant-card-horizontal border-0" style={{ cursor: "pointer" }}>
                    <Card.Img variant="top" src={restaurant.restaurantImage} height="175" />
                    <Card.ImgOverlay className="d-flex justify-content-end" style={{ marginTop: "124px" }}>
                        {getHeartIcon(restaurant.isCustomerFavourite)}
                    </Card.ImgOverlay>
                    <Card.Body className="pl-0 pr-0">
                        <Row>
                            <Col xs={10}>
                                <Card.Title style={{ fontSize: "18px" }}>{restaurant.restaurantName}</Card.Title>
                                <Card.Text style={{ fontSize: "14px" }}>
                                    {getDeliveryFeeSpan(restaurant.freeDelivery, restaurant.deliveryFee)}
                                    {bullet}{getDeliveryTimeSpan(restaurant.deliveryTime)}
                                    {bullet}{getPriceRangeSpan(restaurant.meal)}
                                </Card.Text>
                            </Col>
                            <Col className="my-auto">
                                {getRatingSpan(restaurant.rating)}
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer className="bg-white pl-0">
                        <small className="text-muted">{restaurant.restaurantSpecialty.split(",").join(bullet)}</small>
                    </Card.Footer>
                </Card>
            </Link>
        </Col>
    )
}


export default RestaurantCard;