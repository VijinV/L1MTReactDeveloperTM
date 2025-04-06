import { Container, Row, Col } from 'react-bootstrap';


const WelcomeHeader: React.FC = () => {
    return (
        <Container fluid className="my-md-4 px-3 px-md-20 ">
        <Row>
          <Col md={5} className="p-0 d-flex align-items-start">
            <div className="bg-primary opacity-75 w-100 mt-3" style={{height: '2px'}}></div>
          </Col>
          <Col md={2} className="px-3">
            <h1 className="text-center mb-0 fw-medium text-uppercase text-primary">
              Welcome
            </h1>
          </Col>
          <Col md={5} className="p-0 d-flex align-items-end">
            <div className="bg-primary opacity-75 w-100 mb-3" style={{height: '2px'}}></div>
          </Col>
        </Row>
      </Container>
    );
  };

  export default WelcomeHeader;
