import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../Images/tech karo.png';
import Table from 'react-bootstrap/Table';

function Footer() {
    return (
        <>
            <div className="footer">
                <Container className="footerLogo">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="60px"
                            className="d-inline-block align-top"
                            alt="Circle women logo"
                        />
                    </Navbar.Brand>
                </Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                       
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Footer;