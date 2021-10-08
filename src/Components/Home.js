import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import slider1 from '../Images/registration.jpg';
import slider2 from '../Images/slider-img2.jpg';
import NavBar from './NavBar';
import CircleWomen from './CircleWomen';
import TechKaro from './TechKaro';
import Gallery from './Gallery';
import Sponsors from './Sponsors';
import Footer from './Footer';

function Home() {
    return (
        <>
            <NavBar />
            <div className="slider" >
                <Carousel style={{ width: '100%' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="overlay">
                            <div>
                            <h3>Click here to register yourself</h3>
                            <Button variant="dark">Register</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="overlay">
                            <div >
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <CircleWomen />
            <TechKaro />
            <Gallery />
            <Sponsors />
            <Footer />
        </>
    )
}

export default Home;