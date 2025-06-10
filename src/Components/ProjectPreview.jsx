import React from "react";
import "./ProjectPreview.css";
import Project from "./Projects";

const projects = [
  {
    title: "Todo App",
    description: "A React-based todo manager with localStorage support.",
    link: "https://github.com/yourusername/todo-app",
    tech: ["React", "JavaScript", "CSS"]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "https://yourportfolio.com",
    tech: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Employee Management System",
    description: "Spring Boot app for managing employees with CRUD operations, connected to MySQL.",
    link: "https://github.com/yourusername/employee-management",
    tech: ["Java", "Spring Boot", "MySQL"]
  }
];

const ProjectPreview = () => {
  return (
    <section className="project-preview">
      <h2>Featured Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPreview;
