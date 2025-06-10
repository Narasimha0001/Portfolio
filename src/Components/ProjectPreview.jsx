import React from "react";
import "./ProjectPreview.css";

const projects = [
  {
    title: "Todo App",
    description: "A React-based todo manager with localStorage support.",
    link: "https://github.com/yourusername/todo-app"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "https://yourportfolio.com"
  },
  {
    title: "Employee Management System",
    description: "Java Spring Boot app for managing employee data with MySQL backend.",
    link: "https://github.com/yourusername/employee-management"
  }
];

const ProjectPreview = () => {
  return (
    <section className="project-preview">
      <h2>Featured Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPreview;
