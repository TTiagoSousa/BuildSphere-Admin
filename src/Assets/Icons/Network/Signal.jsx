import React from 'react';

const Signal = ({ Global_Color }) => {
  return (
    <svg viewBox="-0.5 0 25 25" fill={Global_Color} xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
        <path d="M21 3V22" stroke={Global_Color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> 
        <path d="M15 8V22" stroke={Global_Color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 13V22" stroke={Global_Color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> 
        <path d="M3 17V22" stroke={Global_Color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> 
      </g>
    </svg>
  )
};

export default Signal;