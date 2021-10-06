import Card from 'react-bootstrap/Card';
import Women from '../Images/CircleWomen.PNG';

function CircleWomen() {
    return (
        <>
            <div className="circleWomen" >
                <Card style={{ width:'fit-content', display:'flex', flexDirection:'row', border:'none'}}>
                    <Card.Img variant="top" src={Women}  style={{width: '650px'}}/>
                    <Card.Body style={{display:'flex', flexDirection:'column', padding:'40px 50px'}}>
                        <Card.Title style={{fontSize: '35px'}}>Circle Women</Card.Title>
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