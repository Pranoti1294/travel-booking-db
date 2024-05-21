import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BASE_ROUTE, BOOKING_LINK_ROUTE, BOOKING_ROUTE, REGISTRATION_ROUTE, STUDENTS_LIST_ROUTE } from "../../constants/AppRoute";

export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"> Tour Booking App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={BASE_ROUTE}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to={BOOKING_ROUTE}>
                            <Nav.Link>Booking place</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={BOOKING_LINK_ROUTE}>
                            <Nav.Link>Booking List</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}