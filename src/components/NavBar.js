import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    Button,
  } from "react-bootstrap";
  
  const NavBar = ({ query, setQuery }) => {
    const handleOnChange = (e) => {
      setQuery(e.target.value);
    };
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Coder News</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={handleOnChange}
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  export default NavBar;
  