import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcons } from '../SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} className="mb-4">
           <SocialIcons />
          </Col>
          <Col xs={12} className="mb-2">
            <p className="mb-1">Example@email.com</p>
          </Col>
          <Col xs={12}>
            <p className="text-muted small mb-0">Copyright © 2020 Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
