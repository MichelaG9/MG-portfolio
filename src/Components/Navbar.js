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
                    <Nav.Item>
                        <Link to="/" className="nav-link" aria-current="page">
                            Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </Nav.Item>
                        <Nav.Link eventKey="3" className=" mr-3" >Projects</Nav.Link>
                        <Nav.Link eventKey="4" className=" mr-3" >Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
     );
}
 
export default Navigationbar;