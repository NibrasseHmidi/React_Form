import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import './App.css';


function App() {
    return (
     <div className="App" >
        <header className="App-header">
   <h1>
   Create Account 
   </h1>
     <Form>

       <Row className="mb-3">
    <Form.Group as={Col} controlId="FirstName">
      <Form.Label>First name  <span>* </span> </Form.Label>
      <Form.Control type="text" placeholder="First name" />
    </Form.Group>

    <Form.Group as={Col} controlId="LastName">
      <Form.Label>Last name <span>* </span></Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email <span>* </span></Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
       <Form.Text className="text-muted">
      We ll never share your email with anyone else.
    </Form.Text>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password <span>* </span> (8 characters minimum )</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="DateOfBirth">
    <Form.Label>Date of Birth <span>* </span> </Form.Label>
    <Form.Control type="date" placeholder="jj/mm/aaaa" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address <span>* </span></Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Tunis</option>
         <option>Gafsa</option>
          <option>Gabes</option>
           <option>Sousa</option>
            <option>Mahdia</option>
             <option>Touzer</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
<Form.Group controlId="formFileSm" className="mb-3">
    <Form.Label>profile picture</Form.Label>
    <Form.Control type="file" size="sm" />
  </Form.Group>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit" className="button">
    Submit
  </Button>
</Form>
</header>
    </div>
    );   
}


export default App;
