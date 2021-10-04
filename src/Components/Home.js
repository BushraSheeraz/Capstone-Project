import Carousel from 'react-bootstrap/Carousel';
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
            <div className="slider">
                <Carousel style={{ width: '60rem' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                            width='inherit'
                        />
                        <Carousel.Caption>
                            <h3>Click here to register yourself</h3>
                            <Button variant="dark">Register</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider}
                            alt="Second slide"
                            width='inherit'
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Third slide"
                            width='inherit'
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