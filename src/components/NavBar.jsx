import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function NavBar() {
  const token = useContext(AuthContext).token;
  const setToken = useContext(AuthContext).setToken;
  const navigate = useNavigate();

  function logout() {
    setToken(null);
    navigate("/");
  }

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Wei Lun&apos;s Login App</Navbar.Brand>
        <Navbar.Toggle aria-controls="login-app" />
        <Navbar.Collapse id="login-app">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Button variant="dark" onClick={logout}>Logout</Button>
              </>
            )
              : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}