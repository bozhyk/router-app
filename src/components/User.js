import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Col, Row } from 'react-bootstrap';

const User = ({ id, name, email, phone, address }) => (
  <ListGroup.Item action href={`/users/${id}`}>
    <Container>
        <Row>
          <Col>
            { name }
          </Col>
          <Col>
            { email }
          </Col>
          <Col>
            { phone }
          </Col>
          <Col>
            { address.city }
          </Col>
        </Row>
      </Container>
  </ListGroup.Item>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default User;
