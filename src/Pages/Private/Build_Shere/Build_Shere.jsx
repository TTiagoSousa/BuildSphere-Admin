import React from 'react';
import Private_Routes from '../../../Routes/Private_Routes';
import './Build_Shere.scss';
import { NavsState } from '../../../Contexts/Navs_Context';

const Build_Shere = () => {

  return (
    <>

      <div className='Build_Shere'>
        <div>
          <Private_Routes />
        </div>
      </div>
    </>
  )
};

export default Build_Shere;