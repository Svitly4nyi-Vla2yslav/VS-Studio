type ProjectPreviewProps = {
  image: string;
  title: string;
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ image, title }) => {
  return (
    <div className='project-preview' aria-label={title}>
      <img src={image} alt={title} loading='lazy' decoding='async' fetchPriority='low' />
      <div className='preview-overlay' />
    </div>
  );
};

export default ProjectPreview;
