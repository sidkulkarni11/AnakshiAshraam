import React from "react";
import sudhaar from "../assets/Initiatives/aandakshi.jpeg";
import gyaan from "../assets/Initiatives/parkoutings.jpeg";
import nirmaan from "../assets/Initiatives/cooking.jpeg";
import gogreen from "../assets/Initiatives/mall.jpeg";
import muskaan from "../assets/Initiatives/Muskaan.png";
import "../css/initiatives.css";

const initiatives = [
  {
    title: "Sudhaar",
    desc: "An initiative focused on rehabilitation, skill-building, and empowerment for marginalized communities.",
    img: sudhaar,
  },
  {
    title: "Gyaan",
    desc: "A movement to spread education and awareness among children and youth in underprivileged areas.",
    img: gyaan,
  },
  {
    title: "Nirmaan",
    desc: "A project that promotes rural development, infrastructure improvement, and community building.",
    img: nirmaan,
  },
];

const Initiatives = () => {
  return (
      <section className="initiatives-section">
        <div className="title">
          <h1>
            <span>OUR</span> INITIATIVES
          </h1>
        </div>

        <div className="initiatives-list">
          {initiatives.map((item, index) => (
              <div
                  className={`initiative-card ${index % 2 !== 0 ? "reverse" : ""}`}
                  key={item.title}
              >
                <div className="initiative-image">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="initiative-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Initiatives;
