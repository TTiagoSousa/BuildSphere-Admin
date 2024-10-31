import React, { useState } from 'react';
import './Sign_In.scss';
import Base_Input from '../../../Components/Inputs/Base_Input/Base_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { NavsState } from '../../../Contexts/Navs_Context';
import { useSignin } from '../../../Hooks/Auth/useSignin';

const Sign_In = () => {

  const{     
    employeeNumber, setEmployeeNumber,
    email, setEmail,
    password, setPassword,
    signin 
  } = useSignin();

  return (
    <div className='Sign_In'>
      <div className='Top'></div>
      <div className='Bottom'></div>
      <div className='Form_Container'>
        <form action="">
          <div className="Title">
            <span>Sign in</span>
          </div>
          <div className="Input_Field">
            <Base_Input 
              placeholder='Email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Base_Input 
              placeholder='Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Button_Field">
            <Global_Button 
              text="Login"  
              onClick={signin}          
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sign_In;