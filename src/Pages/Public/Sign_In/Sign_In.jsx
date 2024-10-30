import React, { useState } from 'react';
import './Sign_In.scss';
import Base_Input from '../../../Components/Inputs/Base_Input/Base_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { NavsState } from '../../../Contexts/Navs_Context';

const Sign_In = () => {

  const { setAlert } = NavsState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert({
        open: true,
        message: 'Por favor, preencha todos os campos',
        type: 'error',
      });
      return;
    }

    // Simule uma verificação de login bem-sucedida
    setAlert({
      open: true,
      message: 'Login efetuado com sucesso!',
      type: 'success',
    });
  };

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
            />
          </div>
          <div className="Input_Field">
            <Base_Input 
              placeholder='Password'
            />
          </div>
          <div className="Button_Field">
            <Global_Button 
              text="Login"  
              onClick={handleLogin}          
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sign_In;