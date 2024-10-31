import { Route, Routes } from 'react-router-dom';
import './App.scss';
import * as Public_Page from './Imports/public.pages';
import GlobalAlert from './Components/Alerts/Global_Alert/Global_Alert';
import Authentication_Check from './Authentication/Authentication_Check';
import * as Private_Page from './Imports/private.pages';

function App() {

  return (
    <>
      <main>
        <GlobalAlert />

        <Routes>
          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_In' element={<Public_Page.Sign_In />} />

          <Route
            path="/Build_Sphere/*"
            element={
              <Authentication_Check>
                <Private_Page.Build_Shere />
              </Authentication_Check>
            }
          />
        </Routes>
      </main>
    </>
  )
};

export default App;