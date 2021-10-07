import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../Images/tech karo.png';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{marginBottom:'20px', boxShadow: '12px 10px #f1eeee'}}>
                <Container >
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width= "60px"
                            className="d-inline-block align-top"
                            alt="Circle women logo"
                        />
                    </Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About us</Nav.Link>
                            <Nav.Link href="#pricing">Registration</Nav.Link>
                            <Nav.Link href="#pricing">Gallery</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
        </>
    )
}

export default NavBar;