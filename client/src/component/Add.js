import React from 'react'
import { Form,Button} from 'react-bootstrap';

const Add = () => {
  return (
    <div>
      <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
      <Form.Label>name</Form.Label>
      <Form.Control    placeholder="Enter name"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupAge">
      <Form.Label>age</Form.Label>
      <Form.Control    placeholder="Enter age" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  <Button>
    Submit
  </Button>
  </Form>
  </div>
  )
}

export default Add