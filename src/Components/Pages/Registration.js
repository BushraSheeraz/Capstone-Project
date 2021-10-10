import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Registration() {
    return (
        <>
            <div className="formDiv">
                <Form>
                    <Form.Group className="mb-3" controlId="Name" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Normal text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Age">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Age">
                        <Form.Label>CNIC No.</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Eductaion">
                        <Form.Label>Education</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select Course</Form.Label>
                        <Form.Select>
                            <option>Select Course</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Registration;