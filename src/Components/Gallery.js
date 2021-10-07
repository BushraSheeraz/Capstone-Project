import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image1 from '../Images/gallery3.jpg';
import image2 from '../Images/gallery2.jpg';
import image3 from '../Images/gallery11.jpg';
// import CardGroup from 'react-bootstrap/CardGroup';

function Gallery() {
    return (
        <>
            <div className="gallery" style={{display:'flex'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image1}/>
                    <Card.Body>
                        {/* <Card.Title>Our Alumini</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image2}/>
                    <Card.Body>
                        {/* <Card.Title>She Loves Tech</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        {/* <Card.Title>Tech Karo in Gilgit</Card.Title> */}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Gallery;