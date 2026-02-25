import HoverVideoPreview from './HoverVideoPreview';
import { projectCards } from './homePageData';

const ProjectsSection: React.FC = () => (
  <section className='section'>
    <h2>Projects / Case Studies</h2>
    <p className='muted'>
      Цілі та очікуваний ефект, без фейкових цифр. Наведіть курсор, щоб побачити live preview.
    </p>
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
);

export default ProjectsSection;
