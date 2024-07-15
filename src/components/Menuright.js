import React from "react";
import "./menuright.css";
import Maki from "./Maki.js";
import Urumaki from "./Urumaki.js";
import Specialrolls from "./Specialrolls.js";
import { Link, animateScroll as scroll } from "react-scroll";

function Menuright() {
  return (
    <div className="menu-right">
      <div className="menu-right-head">
        <ul>
          <li>
            <Link
              to="maki"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed to account for navbar height
              duration={500} // Adjust duration as needed
            >
              MAKI
            </Link>
          </li>
          <li>
            <Link
              to="urumaki"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              URAMAKI
            </Link>
          </li>
          <li>
            <Link
              to="rolls"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              SPECIAL ROLLS
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-right-foods">
        <section id="maki" className="menu-right-food">
          <h3>MAKI</h3>
          <Maki />
        </section>
        <section id="urumaki" className="menu-right-food">
          <h3>URUMAKI</h3>
          <Urumaki />
        </section>
        <section id="rolls" className="menu-right-food">
          <h3>SPECIAL ROLLS</h3>
          <Specialrolls />
        </section>
      </div>
    </div>
  );
}

export default Menuright;
