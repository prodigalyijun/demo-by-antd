import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserAdd extends React.Component {
  render() {
    return (
      <UserEditor />
    );
  }
}

UserAdd.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default UserAdd;