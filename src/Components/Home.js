import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import slider1 from '../Images/registration.jpg';
import slider from '../Images/slider-img.jpg';
import slider2 from '../Images/slider-img2.jpg';
import NavBar from './NavBar';
import CircleWomen from './CircleWomen';
import TechKaro from './TechKaro';

function Home() {
    return (
        <>
            <NavBar />
            <div className="slider" >
                <Carousel style={{ width: '100%' }}>

                    <Carousel.Item>
                        <div>
                            <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>Click here to register yourself</h3>
                            <Button variant="dark">Register</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <CircleWomen />
            <TechKaro />

        </>
    )
}

export default Home;