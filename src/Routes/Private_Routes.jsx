import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Private_Page from '../Imports/private.pages';

const Private_Routes = () => {
  return (
    <>
      <Routes>
        <Route index element={ <Private_Page.Build_Shere /> }/>
      </Routes>
    </>
  )
};

export default Private_Routes;