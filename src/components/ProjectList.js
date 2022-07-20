import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map((project) =>
          <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={project.id}/>
        )
      }</div>
    </div>
  );
}

export default ProjectList;
