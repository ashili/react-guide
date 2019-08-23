import React from 'react';
import './userout.css';

const UserOutput = props => {
  return (
    <div className="usrOutStyle">
      <p> Username : </p>
      <p onClick={props.usernamechange}> {props.username}</p>
    </div>
  );
};

export default UserOutput;
