import Project from './project';

import INFO from '../../data/user';

import './styles/allProjects.css';

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.list.map((project) => (
        <div className="all-projects-project" key={project.title}>
          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            actions={project.actions}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
