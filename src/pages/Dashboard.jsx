import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function goToProfile() {
    navigate("/profile");
  }

  return (
    <Container>
      <h1 className="my-3">Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Sigma School Analytics</Card.Title>
              <Card.Text>People who graduate who get jobs: 80%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="dark" onClick={goToProfile}>Go to Profile</Button>
    </Container>
  );
}