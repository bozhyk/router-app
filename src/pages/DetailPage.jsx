import React, { useEffect } from 'react';
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
import { loadUserData } from '../actions';

const DetailPage = ({ currentUser = {}, dispatch }) => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(loadUserData(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
              <Form.Control value={currentUser.name} onChange={() => handleUpdate()} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={currentUser.email}
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
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(DetailPage);
