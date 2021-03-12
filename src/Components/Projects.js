import { Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
    return ( 
        <div className="projects">
            <Row className="my-3 justify-content-center align-items-center">
                <Col md={11}>
                    <Card className="text-left p-5" id="draw-shadow">
                        <Card.Body className="m-0 p-0" >
                            <Card.Title as="h1" className="text-black mb-5" style={{ fontWeight: '800'}}>Projects</Card.Title>
                            <Row>
                                <Col md={4} sm={6} className="my-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} sm={6} className="my-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} sm={6} className="my-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
 
export default Projects;