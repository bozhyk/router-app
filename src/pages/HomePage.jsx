import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import UserList from '../components/UserList';

const HomePage = () =>
  (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>User List</h1>
          <UserList />
        </Col>
      </Row>
    </Container>
  );

export default HomePage;
