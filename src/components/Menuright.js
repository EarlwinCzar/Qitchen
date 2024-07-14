import React, { useState } from "react";
import "./menuright.css";
import Maki from "./Maki.js";
import Urumaki from "./Urumaki.js";
import Specialrolls from "./Specialrolls.js";

function Menuright() {
  return (
    <div className="menu-right">
      <div className="menu-right-head">
        <ul>
          <li>
            <a href="#maki">MAKI</a>
          </li>
          <li>
            <a href="#urumaki">URAMAKI</a>
          </li>
          <li>
            <a href="#rolls">SPECIAL ROLLS</a>
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
