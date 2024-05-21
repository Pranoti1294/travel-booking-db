import { Container } from "react-bootstrap";
import { Header } from "../library/Header";

export function Home(){
    return (
        <Container>
            <Header title="Welcome to student management application" description="Here you can perform CRUD operations on a student." />
        </Container>
    )
}