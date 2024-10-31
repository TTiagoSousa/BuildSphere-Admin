import React from 'react';
import Private_Routes from '../../../Routes/Private_Routes';
import './Build_Shere.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import Sidebar_Home from '../../../Containers/Sidebars/Sidebar_Home/Sidebar_Home';

const Build_Shere = () => {

  return (
    <>

      <Sidebar_Home />

      <div className='Build_Shere'>
        <div className='Content'>
          <Private_Routes />
        </div>
      </div>
    </>
  )
};

export default Build_Shere;