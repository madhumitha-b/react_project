import React, { Component } from "react";
import "./style.css";
import { Button, Form, Row, Col } from "react-bootstrap";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleText = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/result",
      state: {
        value: this.state.text
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> FIND DUPLICATE FORM </h1>
          <Form className="form-horizontal">
            <Form.Group as={Row} controlId="formHorizontalNumber">
              <Form.Label column sm={6} margin="left">
                Input
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="text"
                  onChange={this.handleText}
                />
              </Col>
            </Form.Group>

            <Button onClick={this.handleSubmit}>Submit</Button>

            <Form.Text className="text-muted">* Required Field</Form.Text>
          </Form>
        </header>
      </div>
    );
  }
}

export default Calculator;
