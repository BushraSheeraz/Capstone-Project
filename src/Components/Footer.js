import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/tech karo.png';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerLogo">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="60px"
                            className="d-inline-block align-top"
                            alt="Circle women logo"
                        />
                    </Navbar.Brand>
                </div>
                <Table className="tableDiv">
                    <thead>
                        <tr>
                            <td>About us</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Registration</td>
                        </tr>
                        <tr>
                            <td>Gallery</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="socialMedia">
                    <h4>Contact Us</h4>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '20px' }} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;