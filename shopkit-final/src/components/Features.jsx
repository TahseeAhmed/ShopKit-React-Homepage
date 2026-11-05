import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Features() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Features</h2>

      <Row>
        <Col md={4} className="mb-3">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Quality Products</Card.Title>
              <Card.Text>
                Find high-quality products at affordable prices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>
                Get your favorite products delivered quickly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Secure Payment</Card.Title>
              <Card.Text>Enjoy safe and secure payment options.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
