import { Row, Col, Image, Card } from 'react-bootstrap';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import instagram from './images/instagram.png';
import contact from './images/contact.png';
import email from './images/email.png';

const Contacts = () => {
    return ( 
        <div className="contacts">
            <Row className="my-5">
                <Col md={12} lg={{ span: 8, offset: 2 }}>
                <Card className="text-center py-5 shadow" border="dark">
                    <Card.Body>
                        <Card.Title as="h1" className="text-black" style={{ fontWeight: '800'}}>Contact me!</Card.Title>
                        <Card.Text>
                            <Row className="m-md-5 d-flex justify-content-center align-items-center">
                                <Col sm="auto" className="p-0">
                                    <Image src={email} className="p-3" width="100px" />
                                    <Image src={linkedin} className="p-3" width="100px" />
                                </Col>
                                <Col sm="auto" className="p-0">
                                    <Image src={github} className="p-3" width="100px" />
                                    <Image src={instagram} className="p-3" width="100px" />
                                </Col >
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            
        </div>
    );
}
 
export default Contacts;