import { Navbar, Nav, NavDropdown, FormControl, Col, InputGroup, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

export function FeedNavbar ({ searchText, updateSearchText }) {
  
    return (
        <Navbar bg="white" variant="light" expand="xs">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Col>
                <Link to="/"><Navbar.Brand><img src="../snackoverflow.png" alt="logo" /></Navbar.Brand></Link>
            </Col>

            <SearchBar searchText={searchText} updateSearchText={updateSearchText} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Deliver Now" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Deliver Now</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Schedule for later</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavDropdown title="Navigate" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/1">Orders</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Favourites</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3">Wallet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4">Help</NavDropdown.Item>
                        <NavDropdown.Item href="#action/5">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/6">Promotions</NavDropdown.Item>
                        <NavDropdown.Item href="#action/7">Eats Pass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/8">Sign out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

function SearchBar ({ searchText, updateSearchText }) {
    let navigate = useNavigate();

    const onChange = (e) => {
        updateSearchText(e.target.value)
    }

    const onSubmit = (str) => {
        const to = {
            pathname: `/search`,
            search: `?q=${str}`,
            state: { searchTerm: str }
        }
        navigate(to)

    }

    return (
        <InputGroup className="col-xs-6 col-md-6">
            <FormControl
                type="input"
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        onSubmit(searchText)
                    }
                }}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={searchText}
                onChange={onChange}
            />
        </InputGroup>
    )


}
