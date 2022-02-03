import React, { useState } from "react";
import './navbar.css'
import Logo from './../../assets/logo.svg'
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
  <>
    <p><a href="/">Home</a></p>
    <p><a href="/services">Services</a></p>
    <p><a href="/capabilities">Capabilities</a></p> 
    <p><a href="/company">Company</a></p>
    <button type='button' style={{ 'padding': '0.5rem 1.3rem 0rem', 
    'background': '#FF4820', 
    'borderRadius': '5px', 
    'border': '0', 
    'outline': 'none',
    'cursor': 'pointer'
     }}><p><a href="/contact">Get Started</a></p></button>

  </>
)
  return (
    <div className="navbar"> 
      <div className="navbar__links">
        <div className="navbar__logo">
          <a href="/">
            <img src={Logo} alt="Etheware 2022" />
          </a>
        </div>
        <div className="navbar__links-container">
        <p><a href="/enterprise">Enterprise</a></p>
          <p><a href="/services">Services</a></p>
          <p><a href="/capabilities">Capabilities</a></p>
          <p><a href="/company">Company</a></p>
        </div>
        <div className="navbar__sign">
          <button type='button'><p><a href="/contact">Get Started</a></p></button>
        </div>
        <div className="navbar__menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenuFill color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="menu__container scale-up-center">
              <div className="menu__links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div> 
    </div>
  )
};
export default Navbar;
