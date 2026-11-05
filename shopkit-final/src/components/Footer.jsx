import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <h5>ShopKit</h5>

        <p>Your trusted place for quality products.</p>

        <div className="mb-3">
          <a href="#" className="text-white mx-2">
            Home
          </a>
          <a href="#" className="text-white mx-2">
            Products
          </a>
          <a href="#" className="text-white mx-2">
            Contact
          </a>
        </div>

        <p className="mb-0">Copyright © 2026 ShopKit. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
