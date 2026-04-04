import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link as={Link} to="/">Login</Nav.Link>
                    <Nav.Link as={Link} to="/forgot">Forgot</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;