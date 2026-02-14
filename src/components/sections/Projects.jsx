import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Projects() {
  return (
    <section id="projects" className="lg:px-16">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white mb-8">
        Projects
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">
        {user_info.projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
