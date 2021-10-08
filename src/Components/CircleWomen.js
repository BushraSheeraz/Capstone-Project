import Card from 'react-bootstrap/Card';
import Women from '../Images/CircleWomen.PNG';

function CircleWomen() {
    return (
        <>
            <div className="circleWomen" >
                <Card className="womenCard">
                    <Card.Img variant="top" src={Women} className="womenImage" style={{width:'450px', height:'400px'}} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', padding: '40px 80px' }}>
                        <Card.Title style={{ fontSize: '35px' }}>Circle Women</Card.Title>
                        <Card.Text>
                            CIRCLE Women is a social enterprise dedicated to women's economic empowerment and leadership development through advocacy, research and innovative entrepreneurial labs.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CircleWomen;