import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const skills = [
    { name: "UI/UX Design", cover: "/images (1).png" },
    { name: "Graphics Designing", cover: "/6388f719127865e901c628fa_graphic-design-free-logo-generator.png" },
    { name: "Editing", cover: "/Mask group.jpg" },
    { name: "Full Stack Development", cover: "/fae862fff4f6100d000a1c01c4030db0.jpg" },
    { name: "Flutter Development", cover: "/Flutter-2.jpg" },
  ];

  return (
    <section className="portfolio">
      <h2>My Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.cover} alt={skill.name} className="skill-cover" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button className="big-button" onClick={() => alert("Tool Proficiency Clicked!")}>
          Tool Proficiency
        </button>
        <button className="big-button" onClick={() => alert("My Projects Clicked!")}>
          My Projects
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
