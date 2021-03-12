import { Row, Col, Card, Image } from 'react-bootstrap';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import python from './images/python.png';
import django from './images/django.png';
import profile from './images/profile.jpg';

const About = () => {
    return ( 
        <div className="about">
            <Row className="my-3">
                <Col md={12} lg={{ span: 8, offset: 2 }}>
                    <Card className="text-center px-5" id="draw-shadow">
                        <Card.Body className="m-0 p-0" >
                            <Card.Title as="h1" className="text-black my-5" style={{ fontWeight: '800'}}>About me</Card.Title>
                                <Row className="my-3">
                                    <Col sm={4} xs={{ order: 'last' }} sm={{ order: 'first' }}>
                                        <Image src={profile} rounded className="img-fluid border border-5 shadow" />
                                    </Col>

                                    <Col sm={8}>
                                        <Card.Text className="text-left" >
                                            <b>Hello!</b> My name is Michela and because of my unfulfilled potential, I decided to make a career shift from biology to web development.
                                            <br />
                                            <br />
                                            I studied in Italy and England, I have worked in an European Agency and I have been a researcher in Spain. 
                                            <br />
                                            <br />
                                            I have always challanged myself but never felt to have found my passion. 
                                            <br />
                                            <br />
                                            My life changed when I decided to take the HarvardX CS50 course on computer science.
                                            Finally, the passion I was looking for, arrived.
                                            <br />
                                            <br />
                                            I am a self-taught enthusiast, I spend time building my skills in web and software development.
                                            <br />
                                            <br />
                                            <h5><b>My technical skills:</b></h5>

                                            <Image src={html} height="60px" className="p-2" />
                                            <Image src={css} height="60px" className="p-2" />
                                            <Image src={js} height="70px" className="p-2" />
                                            <Image src={react} height="70px" className="p-2" />
                                            <Image src={python} height="60px" className="p-2" />
                                            <Image src={django} height="50px" className="p-2" />
                                        </Card.Text>
                                    </Col>
                                </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
     );
}
 
export default About;