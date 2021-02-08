import React from 'react';

import './UserOutput.css'

const UserOutput = (props) => {
    return (
      <div className="outputBox">
        <p>My username is {props.username}</p>
        <p>{props.children}</p>
      </div>
    )
}

export default UserOutput