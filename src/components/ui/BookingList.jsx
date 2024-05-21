import { Alert, Button, Container, Table } from "react-bootstrap";
import { Header } from "../library/Header";
import { useEffect, useState } from "react";
import { fetchAllBooking, removeBooking } from "../../services/BookService";
import { ToastNotification } from "../library/ToastNotification";
import { ConfirmDialog } from "../library/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import '../../App.css'

export function BookingList() {

    const [booking, setBooking] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [selectedBookingId, setSelectedBookingId] = useState(0);

    const [showToast, setShowToast] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getAllBooking();
    }, []);

    const closeModal = () => {
        setShowModal(false);
    }

    const getAllBooking = async () => {
        const response = await fetchAllBooking();
        setBooking(response.data);
    }

    const handleYesClick = async () => {
        const response = await removeBooking(selectedBookingId);
        if (response.status === 200) {
            setShowModal(false);
            setShowToast(true);
            getAllBooking();
        }

    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

    return (
        <Container>
            <Header title="List of Booking" description="Here you can view, delete, and edit the Booking" />
            <Container className="mt-4">
                {
                    booking.length === 0 ?
                        <Alert variant="danger">No Booking Exists</Alert>
                        :
                        <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Where To Go</th>
                                    <th>No of guest</th>
                                    <th>Arrival</th>
                                    <th>Leaving</th>                                
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booking.map((s) => {
                                        return (
                                            <tr>
                                                <td>{s.id}</td>
                                                <td>{s.name}</td>
                                                <td>{s.email}</td>
                                                <td>{s.phone}</td>
                                                <td>{s.address}</td>
                                                <td>{s.visit}</td>
                                                <td>{s.guest}</td>
                                                <td>{s.arrival}</td>
                                                <td>{s.leaving}</td>
                                                
                                                <td>
                                                    <Button variant="danger" onClick={() => {
                                                        setShowModal(true);
                                                        setSelectedBookingId(s.id);
                                                    }}>Delete</Button>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <Button variant="primary" onClick={()=>{
                                                            navigate(`/edit-booking/${s.id}`)
                                                    }}>Edit</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                }

            </Container>
            <ConfirmDialog
                show={showModal}
                message={`Are you sure, you want to delete ${selectedBookingId} ?`}
                onYes={handleYesClick}
                onClose={closeModal}
            />
            <ToastNotification
                background="light"
                onClose={handleCloseToast}
                show={showToast}
                message="Booking Removed"
            />
            {/* <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove {selectedStudentId}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleYesClick}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModal}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {/* <ToastContainer position="top-end">
                <Toast bg="light" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body>Student Removed</Toast.Body>
                </Toast>
            </ToastContainer> */}
        </Container>
    )
}