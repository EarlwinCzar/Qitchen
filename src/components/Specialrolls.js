import React, { useState } from "react";
import sunsetBliss from "../assets/menu/sunriseBliss.webp";
import mangoTango from "../assets/menu/mangoTango.webp";
import truffle from "../assets/menu/truffle.webp";
import pacific from "../assets/menu/pacific.webp";
import eternal from "../assets/menu/eternal.webp";
import "./food.css";

function Specialrolls() {
  const [rolls, setRolls] = useState([
    {
      name: "SUNRISE BLISS",
      desc: "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
      price: "$16",
      image: sunsetBliss,
    },
    {
      name: "MANGO TANGO",
      desc: "Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
      price: "$16",
      image: mangoTango,
    },
    {
      name: "TRUFFLE INDULGENCE",
      desc: "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
      price: "$16",
      image: truffle,
    },
    {
      name: "PACIFIC FIRECRACKER",
      desc: "Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
      price: "$16",
      image: pacific,
    },
    {
      name: "ETERNAL EEL",
      desc: "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
      price: "$16",
      image: eternal,
    },
  ]);

  return (
    <div>
      {rolls.map((item, index) => (
        <div className="menu-food-wrapper" key={index}>
          <img className="menu-food-image" src={item.image} />
          <div className="menu-food-container">
            <div className="menu-food-det-container">
              <h4 className="menu-food-name">{item.name}</h4>
              <p className="menu-food-price">{item.price}</p>
            </div>
            <p className="menu-food-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Specialrolls;
