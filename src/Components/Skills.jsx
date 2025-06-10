import React from "react";
import './Skills.css'; 

const skillCategories = {
  "Java": [
    "Core Java (OOPs)",
    "JDBC",
    "Servlets",
    "JSP",
    "Spring",
    "Hibernate",
    "Spring Boot"
  ],
  "Python": [
    "Core Python",
    "Django"
  ],
  "SQL": [
    "MySQL",
    "MS SQL"
  ],
  "Frontend": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS"
  ],
  "Tools & Others": [
    "Git"
  ]
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
