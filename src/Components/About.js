import { Row, Col, Card, Image } from 'react-bootstrap';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import python from './images/python.png';
import django from './images/django.png';

const About = () => {
    return ( 
        <div className="about">
            <Row className="my-5">
                <Col md={12} lg={{ span: 10, offset: 1 }}>
                    <Card className="text-center py-5 mb-3" id="draw-shadow">
                        <Card.Body>
                            <Card.Title as="h1" className="text-black mb-5" style={{ fontWeight: '800'}}>About me</Card.Title>
                            <Card.Text className="text-left" >
                                Hello! My name is Michela and because of my unfulfilled potential, I decided to make a career shift from biology to front-end development.
                                <br />
                                My background:
                                <br />
                                I studied in Italy and England, I've worked in an European Agency and I've been a researcher in Spain. 
                                <br />
                                I've always challanged myself but never felt to have found my passion. My life changed when I decided to take the CS50 HarvardX course on computer science.
                                Finally, the passion I was looking for, arrived.
                                <br />
                                I am a self-taught enthusiast, I spend time building my skills in web and software development.
                                <br />
                                My technical skills:

                            </Card.Text>
                            <Image src={html} height="60px" className="p-2" />
                            <Image src={css} height="60px" className="p-2" />
                            <Image src={js} height="70px" className="p-2" />
                            <Image src={react} height="70px" className="p-2" />
                            <Image src={python} height="60px" className="p-2" />
                            <Image src={django} height="50px" className="p-2" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
     );
}
 
export default About;