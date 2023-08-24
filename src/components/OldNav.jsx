import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoc from "../assets/img/logoc.png"
import { SMMpricing } from "../pages/SMMpricing";

const OldNav = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isDrop, setIsDrop] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkMouseEnter = () => {
    setIsDrop(true);
  };

  const closeDropdown = () => {
    setIsDrop(false);
  };

  return (
    <nav onClick={handleMenuToggle}>
      <div className="logo_navbar">
        <Link to="/" className="title">
          <img src={logoc} width={20} height={40} alt=" wow" />
        </Link>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            onMouseEnter={handleNavLinkMouseEnter}
            className="heronav"
          >
            Home
          </NavLink>

        </li>

        <li>
          <NavLink to="/about"

            onMouseEnter={handleNavLinkMouseEnter}

          >
            About
          </NavLink>


        </li>
        <li>
          <NavLink to="#"


          // onMouseEnter={handleNavLinkMouseEnter}

          >Services

          </NavLink>

          {isDrop && (
            <ul className="drop-menu">
              <li onClick={() => { closeDropdown, navigate('./SDevelopment') }}>Software Development</li>
              <li onClick={() => { closeDropdown, navigate('./Wdevelopment') }}>Web Development</li>
              <li onClick={() => { closeDropdown, navigate('./ADevelopment') }}>App Development</li>
              <li onClick={() => { closeDropdown, navigate('./BCDevelopment') }}>Block Chain Development</li>

              <li onClick={() => { closeDropdown, navigate('./GDevelopment') }}>Game Development</li>
              <li onClick={() => { closeDropdown, navigate('./SMMarketing') }}>Social Media Marketing</li>
              <li onClick={() => { closeDropdown, navigate('./SEOptimization') }}>Search Engine Optimization</li>
              <li onClick={() => { closeDropdown, navigate('./CSecurity') }}>Cyber Security</li>



            </ul>
          )}

        </li>

        {/* <li>
          <NavLink to="#"

            onMouseEnter={handleNavLinkMouseEnter}
          >Packages</NavLink>
          {isDrop && (
            <ul className="drop-menu">
              <li onClick={() => { closeDropdown, navigate('./WPpricing')}}>Website Packages & Pricing </li>
              <li onClick={() => { closeDropdown, navigate('./SEOpricing')}}>SEO Packages & Pricing</li>
              <li onClick={() => { closeDropdown, navigate('./SMMpricing')}}>SMM Packages & Pricing</li>
              <li onClick={() => { closeDropdown, navigate('./PPCpricing')}}>PPC Packages & Pricing</li>


            </ul>
          )}
        </li> */}


        {/* <li>
          <NavLink to="/Product">Products</NavLink>
        </li> */}


        <li>
          <NavLink to="/Careers">Carrers</NavLink>
        </li>


        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default OldNav;











