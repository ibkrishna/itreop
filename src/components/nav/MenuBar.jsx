import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logoc.png'

function MenuBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" style={{width: "50px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "flex-end"}}>
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/SDevelopment">Software Development</NavDropdown.Item>
              <NavDropdown.Item href="/Wdevelopment">Website Development </NavDropdown.Item>
              <NavDropdown.Item href="/ADevelopment">App Development</NavDropdown.Item>
              <NavDropdown.Item href="/BCDevelopment">Block Chain Development</NavDropdown.Item>
              <NavDropdown.Item href="/GDevelopment">Game Development</NavDropdown.Item>
              <NavDropdown.Item href="/CSecurity">Cyber Security</NavDropdown.Item>
              <NavDropdown.Item href="/SMMarketing">Social Media Marketing</NavDropdown.Item>
              <NavDropdown.Item href="/SEOptimization">Search Engine Optimization</NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link href="/careers">Careers</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;