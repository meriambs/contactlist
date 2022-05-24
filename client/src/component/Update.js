import React from 'react'
import { Form} from 'react-bootstrap';

const Update = () => {
  return (
    <div>     <Form>
          <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>name</Form.Label>
      <Form.Control type="password" placeholder="name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>age</Form.Label>
      <Form.Control type="password" placeholder="age" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  
  </Form></div>
  )
}

export default Update