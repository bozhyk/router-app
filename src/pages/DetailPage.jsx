import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  ButtonToolbar
} from 'react-bootstrap';

const DetailPage = ({ userList = [] }) => {
  const { id } = useParams();
  const item = userList.find(item => item.id.toString() === id) || {};
  if (!item) {
    return null;
  }

  const handleUpdate = () => {};

  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>User Details:</h1>
          <Form
            onSubmit={e => {
              e.preventDefault();
              // TODO:
            }}
          >
            <Form.Group controlId="formId">
              <Form.Label>ID</Form.Label>
              <Form.Control value={id} readOnly />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control value={item.name} onChange={() => handleUpdate()} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={item.email}
                onChange={() => handleUpdate()}
              />
            </Form.Group>

            <ButtonToolbar>
              <Button variant="primary" type="submit">
                Update
              </Button>
              <Button
                variant="outline-dark"
                onClick={() => window.history.back()}
              >
                Close
              </Button>
            </ButtonToolbar>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  userList: state.userList
});

export default connect(mapStateToProps)(DetailPage);
