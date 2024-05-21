import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookingtById, updateBooking } from "../../services/BookService";
import { BOOKING_LINK_ROUTE } from "../../constants/AppRoute";

export function BookingEditForm() {
    const params = useParams();

    const navigate = useNavigate();

    const [booking, setBooking] = useState({ id: '', name: '', email: '', phone: '', address:'', visit:'', guest:'', arrival:'', leaving:'' });

    const getBookingById = async () => {
        const response = await fetchBookingtById(params.id);
        if (response.status === 200) {
            setBooking(response.data);
        }
    }

    useEffect(() => {
        getBookingById();
    }, []);

    const handleFieldChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await updateBooking(booking);
        if (response.status === 200) {
          navigate(BOOKING_LINK_ROUTE);  
        }
        else{
            // error handling
        }
    }

    return (
        <Container className="containerform">
            <Header title="Edit the booking data" />
            
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" name="id" value={booking.id} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" value={booking.name} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="text" placeholder="Enter your email" name="email" value={booking.email} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone" name="phone" value={booking.phone} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your address" name="address" value={booking.address} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Where To</Form.Label>
                                <Form.Control type="text" placeholder="Place you want to visit" name="visit" value={booking.visit} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>How many</Form.Label>
                                <Form.Control type="text" placeholder="number of guests" name="guest" value={booking.guest} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Arrivals</Form.Label>
                                <Form.Control type="date" value={booking.arrival} onChange={handleFieldChange} name="arrival"/>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Leaving</Form.Label>
                                <Form.Control type="date" value={booking.leaving} onChange={handleFieldChange} name="leaving"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary" >Book Travel </Button>
                        </Col>
                    </Row>
                </Form>
            
        </Container>
    )
}