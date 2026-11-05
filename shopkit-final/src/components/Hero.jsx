import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Hero() {
  const heading = "Welcome to ShopKit";
  const description =
    "Discover quality products at affordable prices. Shop smarter with ShopKit.";

  return (
    <Container className="py-5 text-center">
      <h1 className="display-3 fw-bold">{heading}</h1>

      <p className="lead text-secondary mt-3">{description}</p>

      <Button variant="primary" size="lg" className="mt-3">
        Explore Products
      </Button>
    </Container>
  );
}

export default Hero;
