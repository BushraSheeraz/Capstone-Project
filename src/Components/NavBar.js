import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../Images/tech karo.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Home from './Home';
import GalleryMainPage from "./Pages/GalleryMainPage";
import Registration from "./Pages/Registration";
import TechKaroPage from "./Pages/TechKaroPage";



function NavBar() {
    return (
        <>
                <Navbar collapseOnSelect expand="lg" style={{ marginBottom: '20px', boxShadow: '12px 10px #f1eeee', backgroundColor:'white' }}>
                    <Container >
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                width="60px"
                                className="d-inline-block align-top"
                                alt="Circle women logo"
                            />
                        </Navbar.Brand>
                    </Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Container>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/techkaropage">About us</Nav.Link>
                                <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                                <Nav.Link as={Link} to="/gallerymainpage">Gallery</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
               
            {/* <Home /> */}


        </>
    )
}

export default NavBar;