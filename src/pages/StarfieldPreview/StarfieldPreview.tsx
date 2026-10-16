import StarfieldBackground from '../../components/StarfieldBackground/StarfieldBackground';
import './StarfieldPreview.css';

const StarfieldPreview = () => (
  <section className='starfield-preview'>
    <StarfieldBackground />
    <div className='starfield-preview__content'>
      <span className='starfield-preview__eyebrow'>Isolated canvas preview</span>
      <h1>Leicht. Ruhig. Im VS Web Studio Look.</h1>
      <p>
        Canvas 2D mit begrenzter Pixeldichte, maximal 30 FPS und automatischer Pause außerhalb des sichtbaren Bereichs.
      </p>
      <a href='#starfield-details' className='btn btn-primary'>Preview testen</a>
    </div>
    <div id='starfield-details' className='starfield-preview__details'>
      <strong>Demo-Bereich unterhalb des Folds</strong>
      <p>Beim Scrollen aus dem oberen Bereich stoppt dessen IntersectionObserver die Animation.</p>
    </div>
  </section>
);

export default StarfieldPreview;
