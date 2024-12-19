import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function FeedHeader() {
    return (
        <>
            <Container fluid style={{ backgroundColor: "#ffff", padding: "20px 0" }}>
                <Row className="justify-content-center">
                    <Col xs={12} md={4} lg={3} className="my-auto text-center text-md-start px-4" style={{ color: "#000" }}>
                        <h1>Crave it? Get it.</h1>
                        <p>Search for a favourite restaurant, cuisine, or dish.</p>
                    </Col>
                    <Col xs={12} md={3} lg={2} className="my-3 py-3 px-3 mx-2" style={{ backgroundColor: "#FC813B", borderRadius: "10px" }}>
                        <h5 className="mt-0">Enjoy 30% off (up to $20)</h5>
                        <p className="small">For 5 orders. $50 minimum order</p>
                        <Button className="border-0 btn-sm" style={{ borderRadius: "16px", backgroundColor: "#000000", color: "#FFFFFF" }}>
                            See details <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </Col>
                    <Col xs={12} md={3} lg={2} className="my-3 py-3 px-3 mx-2" style={{ backgroundColor: "#FC7F7A", color: "#122427", borderRadius: "10px" }}>
                        <h5 className="mt-0">Share the love with Family Freebies</h5>
                        <p className="small">Free item with minimum order.</p>
                        <Button className="border-0 btn-sm" style={{ borderRadius: "16px", backgroundColor: "#122427", color: "#FFFFFF" }}>
                            See options <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}