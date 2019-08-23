import React from 'react';

const UserInput = props => {
  const inputStyle = {
    border: '2px Blue solid',
    width: '100%',
    borderRadius: '10px',
    padding: '20px',
    marginLeft: '20%',
    marginRight: '20%'
  };

  return (
    <input
      style={inputStyle}
      type="text"
      onChange={props.usernamechange}
      value={props.currentName}
    />
  );
};

export default UserInput;
