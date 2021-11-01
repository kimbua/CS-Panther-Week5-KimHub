import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Form, FormControl, Navbar, Button,Nav } from "react-bootstrap";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";
const NavBar = ({ query, setQuery }) => {
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navLinks">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <Nav.Link as={Link} style={{textDecoration: 'none', color: 'white'}} to="/premium">Premium</Nav.Link>
          <Nav.Link as={Link} style={{textDecoration: 'none', color: 'white'}} to="/now_playing">Now playing</Nav.Link>
          <Nav.Link as={Link} style={{textDecoration: 'none', color: 'white'}} to="/popular">Popular</Nav.Link>
          <Nav.Link as={Link} style={{textDecoration: 'none', color: 'white'}} to="/top_rated">Top rated</Nav.Link>
          </Nav>
        
        <Nav
        >
          <Nav.Link as={Link} style={{textDecoration: 'none', color: 'white'}} to="/login">Login</Nav.Link> <span>|</span>{" "}
          <Nav.Link as={Link} style={{textDecoration: 'none', color: 'white'}} to="/signup">Sign up</Nav.Link>
        </Nav>
        <Nav>
        <Form className="d-flex ">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 search-input"
            aria-label="Search"
            value={query}
            onChange={handleOnChange}
            />
          <Button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>
        </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  
  
</>
  );
};

export default NavBar;
