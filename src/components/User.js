import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const User = ({ id, name }) => (
  <ListGroup.Item action href={`/users/${id}`}>
    {name}
  </ListGroup.Item>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default User;
