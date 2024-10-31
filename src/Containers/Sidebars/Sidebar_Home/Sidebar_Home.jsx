import React, { useEffect, useState } from 'react';
import './Sidebar_Home.scss';
import { getCookie } from '../../../Utils/Cookies/get.cookies';
import { navItems } from './Navigation_Map';
import { NavLink, useLocation } from 'react-router-dom';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';

const Sidebar_Home = () => {

  const employeeType = getCookie('rega434tgr_#23efdf2df');
  const NavMap = navItems[employeeType] || [];

  const location = useLocation();

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const [isArrowActive, setIsArrowActive] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index));
    setIsArrowActive(!isArrowActive); // Inverte o estado da classe da seta ao abrir/fechar o submenu
  };

  const isAnyDropdownItemActive = (dropdownItems) => {
    return dropdownItems.some(dropdownItem => location.pathname === dropdownItem.to);
  };

  const activeNavLinkStyle = {
    color: 'Dark' ? Color.blue : 'Blue' ? Color.gray : "",
  };

  const TextStyle = {
    color: 'Dark' ? Color.gray :'Blue' ? Color.gray : "",
  };

  const getColorByRoute = (route) => {
    switch(route) {
      case '/Build_Sphere/Dashboard':
        return Color.orange;
      case '/Build_Sphere/Lead_Management':
        return Color.gray_darker;
      case '/Build_Sphere/Contact_Management':
        return Color.blue;
      // Agrega más casos según tus rutas
      default:
        return Color.defaultColor; // Color predeterminado
    }
  };


  return (
    <nav className='Sidebar_Home'>
      <div className='Apresatation'>
        <span>Building</span>
        <span>Shere</span>
      </div>
      <div className="Sidebar_Body">
        {NavMap.map((item, index) => (
            <React.Fragment key={index}>
              {item.dropdownItems ? (
                <div style={{position: "relative"}}>
                  <NavLink
                    to={item.to}
                    onClick={() => toggleDropdown(index)}
                    className='Nav_Item_With_Drop_Menu'
                  >
                    <div className='Icon'>
                      <div>   
                        <Icon.GLobal_SVG 
                         
                        >
                          {item.icon}
                        </Icon.GLobal_SVG>
                      </div>
                    </div>
                    <div className='Text'>
                      <span >{item.text}</span>
                      <div className='Icon_Arrow'>
                        <div className={openDropdownIndex === index && isArrowActive ? 'arrow active' : 'arrow'}>
                          <Icon.Simple_Triangle 
                            
                          />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                  {openDropdownIndex === index && (
                    <div className='DropdownItems' >
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <NavLink key={idx} to={dropdownItem.to}  >
                          <span >{dropdownItem.text}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={index}
                  to={item.to}
                  className='Nav_Item'
                  style={location.pathname === item.to ? activeNavLinkStyle : TextStyle}
                >
                  <div className='Icon'>
                    <div>
                      <Icon.GLobal_SVG Global_Color={getColorByRoute(item.to)}>  
                        {item.icon}
                      </Icon.GLobal_SVG>
                    </div>
                  </div>
                  <div className='Text' >
                    <span>{item.text}</span>
                  </div>
                </NavLink>
              )}
            </React.Fragment>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar_Home;