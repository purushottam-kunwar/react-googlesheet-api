import React, { useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";
import "./App.css";
import { useAlert } from "react-alert";

function App() {
  const alert = useAlert();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [hobby, setHobby] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const objt = { name, age, salary, hobby };

    function refreshPage() {
      window.location.reload(false);
    }

    axios.post("Your Connection Url From sheetbest", objt).then((response) => {
      console.log(response);
      alert.show("Data Added Successfully !!!");
      setTimeout(refreshPage, 1500);
    });
  };

  return (
    <Container fluid className="container">
      <Header as="h2">React google sheet</Header>
      <Form className="form">
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            placeholder="Enter your Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            placeholder="Enter your Salary"
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            placeholder="Enter your Hobby"
            onChange={(e) => setHobby(e.target.value)}
          />
        </Form.Field>

        <Button color="blue" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
