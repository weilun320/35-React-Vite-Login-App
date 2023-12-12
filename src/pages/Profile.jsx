import { Container } from "react-bootstrap";

export default function Profile() {
  return (
    <Container>
      <h1 className="my-3">Profile</h1>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
    </Container>
  );
}