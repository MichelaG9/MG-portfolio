import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return ( 
        <Container>
            <Navbar variant="dark" expand="lg">
                <Link to="/">  
                    <Navbar.Brand className="text-white">MG.</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white mr-3" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-white mr-3" href="#link">About</Nav.Link>
                        <Nav.Link className="text-white mr-3" href="#link">Projects</Nav.Link>
                        <Nav.Link className="text-white mr-3" href="#link">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
     );
}
 
export default Navigationbar;