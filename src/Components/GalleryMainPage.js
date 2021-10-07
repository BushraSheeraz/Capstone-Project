import Card from 'react-bootstrap/Card';
import image1 from '../Images/DM-Std1.jpg';
import image2 from '../Images/DM-Std2.jpg';
import image3 from '../Images/mentor1.jpg';
import image4 from '../Images/impact2.jpg';
import image5 from '../Images/DigM5.jpg';
import image6 from '../Images/impact11.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import GalleryPageContext from './Gallerypagecontext'

<div>
<GalleryPageContext/>
                    
</div>
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
                        <Card.Title>Circle's Mentor Meetup-2021</Card.Title>
                        
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={image4} />
                    <Card.Body>
                        <Card.Title>Circle Arranges Session on Free-Lancing</Card.Title>
                        
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={image5} />
                    <Card.Body>
                        <Card.Title>Tech Karo initiative to Digital Marketing Course</Card.Title>
                        
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src={image6} />
                    <Card.Body>
                        <Card.Title>Always ready to enlighten people of Pakistan</Card.Title>
                        
                    </Card.Body>
                   
                </Card>
            </CardGroup>
        </>
    )
}

export default GalleryMainPage;