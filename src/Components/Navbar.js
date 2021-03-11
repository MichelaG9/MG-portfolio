import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

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

                        <NavLink exact to="/" className="nav-link">
                            Home
                        </NavLink>

                        <NavLink exact to="/about" className="nav-link">
                            About
                        </NavLink>

                        <NavLink exact to="/projects" className="nav-link">
                            Projects
                        </NavLink>

                        <NavLink exact to="/contacts" className="nav-link">
                            Contacts
                        </NavLink>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
     );
}
 
export default Navigationbar;