import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import todoapp from './images/todoapp.png';

const Projects = () => {
    return ( 
        <div className="projects">
            <Row className="my-3 justify-content-center align-items-center">
                <Col md={11}>
                    <Card className="text-left p-2 p-md-5" id="draw-shadow">
                        <Card.Body className="m-0 p-0" >
                            <Card.Title as="h1" className="text-black mb-5" style={{ fontWeight: '800'}}>Projects</Card.Title>
                            <Row>
                                <Col className="my-3">
                                    <Card bg='light' className="shadow-sm rounded" style={{ minWidth: '300px', maxWidth: '400px'}}>
                                        <Card.Header><Image fluid src={todoapp}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Todo App</b></Card.Title>
                                            <Card.Text>
                                                ReactJS | MaterialUI | Firebase
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger">Live demo</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="my-3">
                                    <Card bg='light' className="shadow-sm rounded" style={{ minWidth: '300px', maxWidth: '400px'}}>
                                        <Card.Header><Image fluid src={todoapp}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Blog App</b></Card.Title>
                                            <Card.Text>
                                                ReactJS | MaterialUI | Firebase
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger">Live demo</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="my-3">
                                    <Card bg='light' className="shadow-sm rounded" style={{ minWidth: '300px', maxWidth: '400px'}}>
                                        <Card.Header><Image fluid src={todoapp}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Blog App</b></Card.Title>
                                            <Card.Text>
                                                ReactJS | MaterialUI | Firebase
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger">Live demo</Button>
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