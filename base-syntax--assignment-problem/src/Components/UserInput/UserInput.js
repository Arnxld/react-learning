import React from 'react';

const UserInput = (props) => {
  const style = {
    border: '2px solid red'
  }

  return (
    <input 
      onChange={props.changed}
      style={style}
      type="text" 
      value={props.currentName}
    />
  )
}

export default UserInput;