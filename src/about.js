import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

const AboutMe = ()=>
{
    return(
        <Container>
        <Row className='offset-1 text-light'>
          <Col>.col</Col>
        </Row>
        <Row className='offset-1 text-light'>
          <Col>.col</Col>
        </Row>
        <Row className='offset-1 text-light'>
           .
       
        </Row>
        <Row>
       <Col className='align-self-center col-3 offset-2 h1 text-light'>
      .
       </Col> 
        </Row>
        <Row>
        <Col className='align-self-center col-3 offset-2 h2'>
      About Me
       </Col> 
       <Col className='align-self-start'>
       Hello! My name is Steven and I live to create useful things that are also easy to use with a passion for web development.
       <br/>My passion for development started with the launch of the Nintendo DS. I was very into the hacking and homebrew scene where I learned how to modify files to get my games to behave differently or even change the UI for some games. 
       <br/><br/>Today I am still learning and pursuing knowledge to create new things in the future. Whether that is applications for the phone or web I am not a stranger to trial and error. I have had the priviledge of working at multiple huge corporations and a non-profit which strengthened my knowledge of backend and web technologies.
       </Col>
        </Row>
       
      </Container>
    );
}

export default AboutMe;