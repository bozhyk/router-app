import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import User from './User';

const UserList = ({ userList }) => (
  <ListGroup>
    {userList.map(user => (
      <User key={user.id} {...user} />
    ))}
  </ListGroup>
);

const mapStateToProps = state => ({
  userList: state.userList
});

export default connect(mapStateToProps)(UserList);
