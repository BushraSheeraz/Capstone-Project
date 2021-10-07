import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Logo1 from '../Images/Engrofoundation-Logo.png';
import Logo2 from '../Images/Vopak-Logo.png';

function Sponsors() {
    return (
        <>
            <div className="sponsor">
                <div className="Heading">
                    <h1>Our Sponsors</h1>
                </div>
                <Container >
                    <Row style={{justifyContent:'space-evenly'}}>
                        <Col xs={6} md={4} style={{background:'border-box #d8e8db', boxShadow:'5px 6px cadetblue'}}>
                            <Image src={Logo1} rounded  style={{width:'300px'}}/>
                        </Col>
                        <Col xs={6} md={4} style={{background:'border-box #d8e8db', boxShadow:'5px 6px cadetblue'}}>
                            <Image src={Logo2} rounded style={{width:'200px'}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Sponsors;