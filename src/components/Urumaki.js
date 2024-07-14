import React, { useState } from "react";
import volcanoDelight from "../assets/menu/volcanoDelight.webp";
import rainbowFusion from "../assets/menu/rainbowFusion.webp";
import dragonElegance from "../assets/menu/dragonElegance.webp";
import sunsetSerenity from "../assets/menu/sunsetSerenity.webp";
import mysticGarden from "../assets/menu/mysticGarden.webp";
import oceanBreeze from "../assets/menu/oceanBreeze.webp";
import tokyoBlossom from "../assets/menu/tokyoBlossom.webp";
import "./food.css";

function Urumaki({}) {
  const [urumaki, setUrumaki] = useState([
    {
      name: "VOLCANO DELIGHT",
      desc: "Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
      price: "$12",
      image: volcanoDelight,
    },
    {
      name: "RAINBOW FUSION",
      desc: "A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
      price: "$12",
      image: rainbowFusion,
    },
    {
      name: "DRAGON ELEGANCE",
      desc: "Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
      price: "$12",
      image: dragonElegance,
    },
    {
      name: "SUNSET SERENITY",
      desc: "Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
      price: "$12",
      image: sunsetSerenity,
    },
    {
      name: "MYSTIC GARDEN",
      desc: "Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
      price: "$12",
      image: mysticGarden,
    },
    {
      name: "OCEAN BREEZE",
      desc: "A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
      price: "$12",
      image: oceanBreeze,
    },
    {
      name: "TOKYO BLOSSOM",
      desc: "Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
      price: "$12",
      image: tokyoBlossom,
    },
  ]);
  return (
    <div>
      {urumaki.map((item, index) => (
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

export default Urumaki;
