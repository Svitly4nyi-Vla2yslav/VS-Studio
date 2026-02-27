import HoverVideoPreview from './HoverVideoPreview';
import { projectCards } from './homePageData';
import { ProjectsSectionScope } from './styles/ProjectsSection.styles';

const ProjectsSection: React.FC = () => (
  <ProjectsSectionScope>
    <section className='section'>
      <div className='section-header'>
        <h2>Projects / Case Studies</h2>
        <p className='section-description'>
          {
            '\u0420\u0435\u0430\u043b\u044c\u043d\u0456 \u0437\u0430\u0434\u0430\u0447\u0456 \u0442\u0430 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u0435\u0437 \u00ab\u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0445\u00bb \u0446\u0438\u0444\u0440. \u041d\u0430\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0443\u0440\u0441\u043e\u0440 \u043d\u0430 \u043a\u0435\u0439\u0441, \u0449\u043e\u0431 \u043f\u043e\u0431\u0430\u0447\u0438\u0442\u0438 live preview.'
          }
        </p>
      </div>
      <div className='grid-2 projects-grid'>
        {projectCards.map((project, index) => (
          <article className='card project-card' key={project.title}>
            <HoverVideoPreview poster={project.poster} video={project.video} title={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='project-tags'>
              {project.tags.map(tag => (
                <span key={`${tag}-${index}`}>{tag}</span>
              ))}
            </div>
            <p className='muted'>{project.goal}</p>
          </article>
        ))}
      </div>
    </section>
  </ProjectsSectionScope>
);

export default ProjectsSection;
