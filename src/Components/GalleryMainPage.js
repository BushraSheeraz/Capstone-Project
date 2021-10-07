import Card from 'react-bootstrap/Card';

import image1 from '../Images/gallery3.jpg';
import image2 from '../Images/gallery2.jpg';
import image3 from '../Images/gallery11.jpg';
import CardGroup from 'react-bootstrap/CardGroup';

function GalleryMainPage() {
    return (
        <>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                    <Card.Title>Our Alumni Stories</Card.Title>
                    
                    </Card.Body>                                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>
                            Circle introduces She Loves Tech - Startup</Card.Title>
                            
                        </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Circle in Gilgit-Baltistan</Card.Title>
                        
                    </Card.Body>
                   
                </Card>
            </CardGroup>
        </>
    )
}

export default GalleryMainPage;