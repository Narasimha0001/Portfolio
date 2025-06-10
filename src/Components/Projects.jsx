import React from 'react';
import './Projects.css'; // External CSS file

const projects = {
  Frontend: [
    {
      name: "ToDo List",
      description:
        "A simple and intuitive task management app built using React. It allows users to add, edit, delete, and mark tasks as complete. LocalStorage integration ensures tasks persist across sessions.",
    },
    {
      name: "Stopwatch",
      description:
        "A responsive stopwatch web app built with React. Features include start, pause, reset, and lap recording, all handled with clean useState and useEffect hooks.",
    },
    {
      name: "Random Color Generator",
      description:
        "An interactive tool that generates random background colors at the click of a button. Built using vanilla JavaScript and React hooks, with a dynamic UI that displays the generated color code.",
    },
    {
      name: "Portfolio",
      description:
        "This portfolio website itself, built using React. It showcases my skills, projects, and contact information. Designed to be responsive, minimal, and professional.",
    },
  ],
  Java: [
    {
      name: "E-commerce Electronics Store",
      description:
        "A full-featured Java-based web application simulating an electronics store. Built with JSP, Servlets, JDBC, and MySQL, it allows users to sign up, log in, browse products (Mobiles, Laptops, Fridges, TVs, ACs), add items to the cart, place orders, and view order history. Includes admin-level management for product control and order tracking.",
    },
  ],
};

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      {Object.entries(projects).map(([category, projectList]) => (
        <div key={category} className="project-category">
          <h3>{category} Projects</h3>
          <div className="project-grid">
            {projectList.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  {/* Replace src="" with actual image paths later */}
                  <img src="" alt={`${project.name} preview`} />
                </div>
                <div className="project-content">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
