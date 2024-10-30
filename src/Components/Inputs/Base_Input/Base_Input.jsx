import React from 'react';
import './Base_Input.scss';

const Base_Input = ({placeholder, value, type, onChange}) => {

  return (
    <input
      className='Base_Input'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    >
      
    </input>
  )
};

export default Base_Input;
