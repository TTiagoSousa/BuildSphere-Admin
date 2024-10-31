import React from 'react';
import './Index.scss';
import { Link } from 'react-router-dom';

const Index = () => {


  return (
    <div className='Index'>
      <Link to="Sign_In">Login</Link>
    </div>
  )
};

export default Index;