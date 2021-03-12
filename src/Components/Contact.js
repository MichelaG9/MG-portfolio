import { Row, Col, Image, Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import instagram from './images/instagram.png';
import email from './images/email.png';

const Contact = () => {

    const [modalShow, setModalShow] = useState(false);

    return ( 
        <div className="contacts">
            <Row className="my-5">
                <Col md={12} lg={{ span: 8, offset: 2 }}>
                    <Card className="text-center py-5 mb-3" id="draw-shadow">
                        <Card.Body>
                            <Card.Title as="h1" className="text-black" style={{ fontWeight: '800'}}>Contact me!</Card.Title>
                            <Card.Text>
                                <Row className="m-md-5 d-flex justify-content-center align-items-center">
                                    <Col sm="auto" className="p-0">
                                        <Button variant="link" className="m-0 p-0 shadow-none" onClick={() => setModalShow(true)}><Image src={email} width="100px" className="p-3" /></Button>
                                        <Button variant="link" href="https://www.linkedin.com/in/michela-guzzo-474a71206/" target="_blank" className="m-0 p-0 shadow-none"><Image src={linkedin} width="100px" className="p-3" /></Button>
                                    </Col>
                                    <Col sm="auto" className="p-0">
                                        <Button variant="link" href="https://github.com/MichelaG9" target="_blank" className="m-0 p-0 shadow-none"><Image src={github} width="100px" className="p-3" /></Button>
                                        <Button variant="link" href="https://www.instagram.com/michela.codes/" target="_blank" className="m-0 p-0 shadow-none"><Image src={instagram} width="100px" className="p-3" /></Button>
                                    </Col >
                                </Row>
                            </Card.Text>
                        </Card.Body>
                        <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="md"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Email
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>michela.guzzo[at]gmail.com</h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => setModalShow(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
 
export default Contact;