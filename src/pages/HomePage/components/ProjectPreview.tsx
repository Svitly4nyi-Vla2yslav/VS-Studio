type ProjectPreviewProps = {
  image: string;
  title: string;
};

/**
 * Показує ліниво завантажуване прев’ю проєкту з декоративним overlay.
 * Приймає URL зображення та title, який одночасно використовується як alt і aria-label;
 * локального стану й побічних ефектів компонент не має.
 */
const ProjectPreview: React.FC<ProjectPreviewProps> = ({ image, title }) => {
  return (
    <div className='project-preview' aria-label={title}>
      <img src={image} alt={title} loading='lazy' decoding='async' fetchPriority='low' />
      <div className='preview-overlay' />
    </div>
  );
};

export default ProjectPreview;
