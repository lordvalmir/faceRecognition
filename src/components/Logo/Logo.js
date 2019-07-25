import React from 'react';
import Tilt from 'react-tilt';
import Atom_Logo from './atom.png';
import './Logo.css';

const Logo = ({ name }) => {
  return (
    <div className='ma5 mt0'>
			<Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
				<div className="Tilt-inner pa3" > <img style={{paddingTop: '2px'}} alt='logo' src={Atom_Logo}/></div>
			</Tilt> 
    </div>
  );
}

export default Logo;