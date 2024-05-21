import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header";
import { useState } from "react";
import { saveBooking } from "../../services/BookService";
import { ToastNotification } from "../library/ToastNotification";
import { ToastContainer } from "react-toastify";
import { Toast } from "react-bootstrap";

export function Booking() {

    const [formData, setFormData] = useState({ id: '', name: '', email: '', phone: '', address:'', visit:'', guest:'', arrival:'', leaving:''});

    const [showToast, setShowToast] = useState(false);

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        saveBooking(formData)
            .then((response) => {
                setShowToast(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <Container>
            <Header title="Book a Travel data" description="This is form to book a travel" />
            <Container>
                <Form className="containerform" onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" name="id" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="text" placeholder="Enter your email" name="email" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone" name="phone" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your address" name="address" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Where To</Form.Label>
                                <Form.Control type="text" placeholder="Place you want to visit" name="visit" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>How many</Form.Label>
                                <Form.Control type="text" placeholder="number of guests" name="guest" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Arrivals</Form.Label>
                                <Form.Control type="date" onChange={handleFieldChange} name="arrival"/>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Leaving</Form.Label>
                                <Form.Control type="date" onChange={handleFieldChange} name="leaving"/>
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
            <ToastNotification
                background="success"
                show={showToast}
                message="booking done"
                onClose={handleCloseToast}
            />
            <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Booking done</Toast.Body>
                </Toast>
            </ToastContainer>

        </Container>
    )
}