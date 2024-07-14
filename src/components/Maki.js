import React, { useState } from "react";
import spicyTunaMaki from "../assets/menu/spicyTunaMaki.webp";
import mangoMaki from "../assets/menu/mangoMaki.webp";
import salmonMaki from "../assets/menu/salmonMaki.webp";
import tunaMaki from "../assets/menu/tunaMaki.webp";
import "./food.css";

function Maki({}) {
  const [maki, setMaki] = useState([
    {
      name: "SPICY TUNA MAKI",
      desc: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      price: "$5",
      image: spicyTunaMaki,
    },
    {
      name: "MANGO MAKI",
      desc: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      price: "$5",
      image: mangoMaki,
    },
    {
      name: "SALMON MAKI",
      desc: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      price: "$5",
      image: salmonMaki,
    },
    {
      name: "TUNA MAKI",
      desc: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      price: "$5",
      image: tunaMaki,
    },
  ]);

  return (
    <div>
      {maki.map((item, index) => (
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

export default Maki;
