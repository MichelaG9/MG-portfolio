import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import todoapp from './images/todoapp.png';
import blogapp from './images/blogapp.png';
import portfolio from './images/portfolio.png';
import sudokusolver from './images/sudokusolver.png';
import playapp from './images/playapp.png';

const Projects = () => {
    return ( 
        <div className="projects">
            <Row className="my-3 justify-content-center align-items-center">
                <Col md={11}>
                    <Card className="text-left p-3 p-md-5" id="draw-shadow">
                        <Card.Body className="m-0 p-0" >
                            <Card.Title as="h1" className="text-black mb-5" style={{ fontWeight: '800'}}>Projects</Card.Title>
                            <Row>
                                <Col xs={12} sm={6} lg={4} xl={3} className="my-3">
                                    <Card bg='light' className="shadow-sm rounded ml-3 mx-sm-1 mx-md-0">
                                        <Card.Header><Image fluid src={todoapp}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Todo App</b></Card.Title>
                                            <Card.Text>
                                                ReactJS | MaterialUI | Firebase
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger" href="https://mg-todo-52555.web.app/" target="_blank">Live demo</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} lg={4} xl={3} className="my-3">
                                    <Card bg='light' className="shadow-sm rounded ml-3 mx-sm-1 mx-md-0">
                                        <Card.Header><Image fluid src={blogapp}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Blog App</b></Card.Title>
                                            <Card.Text>
                                                ReactJS | Bootstrap | Node.js | Express | MySQL
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger" href="https://objective-edison-b84da7.netlify.app" target="_blank">Live demo</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} lg={4} xl={3} className="my-3">
                                    <Card bg='light' className="shadow-sm rounded ml-3 mx-sm-1 mx-md-0">
                                        <Card.Header><Image fluid src={portfolio}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Portfolio</b></Card.Title>
                                            <Card.Text>
                                                ReactJS | Bootstrap
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger" href="/">Live demo</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} lg={4} xl={3} className="my-3">
                                    <Card bg='light' className="shadow-sm rounded ml-3 mx-sm-1 mx-md-0">
                                        <Card.Header><Image fluid src={sudokusolver}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Sudoku solver</b></Card.Title>
                                            <Card.Text>
                                                Html | CSS | Javascript - Backward algorithm
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger" href="https://pedantic-mccarthy-8ca06d.netlify.app/" target="_blank">Live demo</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} lg={4} xl={3} className="my-3">
                                    <Card bg='light' className="shadow-sm rounded ml-3 mx-sm-1 mx-md-0">
                                        <Card.Header><Image fluid src={playapp}/></Card.Header>
                                        <Card.Body>
                                            <Card.Title><b>Play!</b></Card.Title>
                                            <Card.Text>
                                                Html | CSS | Javascript
                                            </Card.Text>
                                            <Button size="sm" className="mr-3" variant="dark">GitHub</Button>
                                            <Button size="sm" variant="danger" href="https://blissful-fermat-3ea971.netlify.app/" target="_blank">Live demo</Button>
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