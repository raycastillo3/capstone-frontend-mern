import { useEffect, useState } from "react";
import { Card, Row, Col, Container, Nav } from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";
import { getPriceRangeSpan, getMenuUrl, getHeartIcon, getDeliveryFeeSpan, getDeliveryTimeSpan } from "../utils/Functions"
import {InfoModal} from "../components/InfoModal"
import { horizontalScrollMenuStyle, horizontalScrollMenuItemStyle } from "../styles/Styles"
import RestaurantMenuItemModal from "../components/RestaurantMenuItemModal";

export function RestaurantMenuPage ({ restaurant }) {

    const navItems = ["Protein", "Grains", "Fruits", "Vegetables", "Dairy", "Juices"]
    const headingIds = navItems.map(item => getMenuUrl(item))

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <RestaurantMenuHeader restaurant={restaurant} />
            <Container>
                <ScrollspyNavbar navItems={navItems} headingIds={headingIds} />
                <MealCategoryDivs restaurant={restaurant} headingIds={headingIds} navItems={navItems} />
            </Container>
        </div>
    )
}

function MealCategoryDivs ({ headingIds, navItems, restaurant }) {
    return (
        <>
            {
                headingIds.map((id, index) => {
                    return (
                        <div key={id} className="mt-3" id={`${id}-div`}>
                            <h2 className="pt-4 my-0" id={id}>{navItems[index]}</h2>
                            <RestaurantMenuCardDeck restaurant={restaurant} category={navItems[index]} />
                        </div>
                    )
                })
            }
        </>
    )
}

function RestaurantMenuHeader ({ restaurant }) {
    return (
        <Row variant="danger" style={{ height: "43vh", backgroundImage: `url(${restaurant.restaurantImage})`, backgroundSize: "cover" }}>
            <RestaurantDetails restaurant={restaurant} />
        </Row>
    )
}

function RestaurantDetails ({ restaurant }) {
    const bullet = " \u2022 ";
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleModalOpen = () => {
        setModalIsOpen(!modalIsOpen)
    }

    const priceRange = getPriceRangeSpan(restaurant.meal)
    const specialty = restaurant.restaurantSpecialty.split(",").join(bullet);

    return (
        <>
            <Col sm={12} md={7} lg={5} className="my-auto pl-5 py-3" style={{ backgroundColor: "#FFFFFF" }}>
                <h1>{restaurant.restaurantName}</h1>
                <Card.Text className="mb-1">{priceRange}{bullet}{specialty}</Card.Text>
                <Card.Text>
                    {getDeliveryTimeSpan(restaurant.deliveryTime)}{bullet}
                    {restaurant.rating}<span className="text-muted">(473)</span>{bullet}
                    {getDeliveryFeeSpan(restaurant.freeDelivery, restaurant.deliveryFee)}
                </Card.Text>
                <p className="mb-1" >{restaurant.address}{bullet}<strong style={{ color: "#05A357", cursor: "pointer" }} onClick={() => handleModalOpen()}>More info</strong></p>
                <InfoModal restaurant={restaurant} modalIsOpen={modalIsOpen} handleModalOpen={handleModalOpen} />
            </Col>
            <Col xs={12} className="pl-5">{getHeartIcon(restaurant.isCustomerFavourite, "2x")}</Col>
        </>
    )
}

function RestaurantMenuCardDeck ({ restaurant, category }) {

    return (
        <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
            {(restaurant.meal).filter(item => item.category === category).map((item, index) =>
                <RestaurantMenuCard key={index} itemName={item.name} price={item.price} image={item.image} />
            )}
        </Row>
    )
}

function RestaurantMenuCard ({ itemName, price, image }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleModalOpen = () => {
        setModalIsOpen(!modalIsOpen)
    }
    return (
        <Col className="mt-4">
            <Card className="restaurant-menu-item" style={{ borderWidth: "0.5px" }} onClick={() => handleModalOpen()} >
                <Row >
                    <Col xs={7} >
                        <Card.Body>
                            <h5>
                                {itemName}
                            </h5>
                            <Card.Text>
                                ${price.toFixed(2)}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={5} >
                        <Card.Img src={image} alt="item img" />
                    </Col>
                </Row>
            </Card>
            <RestaurantMenuItemModal itemName={itemName} price={price} image={image} handleModalOpen={handleModalOpen} modalIsOpen={modalIsOpen} />
        </Col>
    )
}

function ScrollspyNavbar ({ navItems, headingIds }) {

    return (
        <div className="border-bottom pl-0 sticky-top bg-white horizontal-navbar">
            <ScrollspyNav
                scrollTargetIds={headingIds}
                activeNavClass="is-active"
                scrollDuration="500"
                offset={-57}
            >
                <Nav style={horizontalScrollMenuStyle}>
                    {headingIds.map((id, index) => {
                        return <Nav.Link key={id} className="text-dark" href={`#${id}`} style={horizontalScrollMenuItemStyle}>{navItems[index]}</Nav.Link>
                    })}
                </Nav>
            </ScrollspyNav>
        </div>
    )
}
