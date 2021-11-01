import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Form, FormControl, Navbar, Button } from "react-bootstrap";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";
const NavBar = ({ query, setQuery }) => {
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:3000/">
          <img src={logo} alt="logo" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div className="d-flex navLinks">
          <Link to="/premium">Premium</Link>
          <Link to="/now_playing">Now playing</Link>
          <Link to="/popular">Popular</Link>
          <Link to="/top_rated">Top rated</Link>
        </div>
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
        <div>
          <Link to="/login">Login</Link> <span>|</span>{" "}
          <Link to="/signup">Sign up</Link>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavBar;
