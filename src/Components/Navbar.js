import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Navigationbar = () => {
    return ( 
        <Container fluid>
            <Navbar variant="dark" expand="md">
                <Link to="/">  
                    <Navbar.Brand className="text-white">MG.</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <NavLink exact to="/" className="nav-link">
                            HOME
                        </NavLink>

                        <NavLink exact to="/about" className="nav-link">
                            ABOUT
                        </NavLink>

                        <NavLink exact to="/projects" className="nav-link">
                            PROJECTS
                        </NavLink>

                        <NavLink exact to="/contacts" className="nav-link">
                            CONTACT
                        </NavLink>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
     );
}
 
export default Navigationbar;