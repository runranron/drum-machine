import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

class Sequencer extends React.Component {
  state = {
    snare: [...Array(32).keys()].fill(0),
    kick: [...Array(32).keys()].fill(0)
  };

  clickHandler(event) {}

  render() {
    return (
      <Container>
        <Row>
          <Col xs="1">Name</Col>
        </Row>
      </Container>
    );
  }
}

export default Sequencer;
