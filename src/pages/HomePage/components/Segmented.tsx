import type { SegmentOption } from './types';

type SegmentedProps = {
  label: string;
  value: string;
  options: readonly SegmentOption[];
  onChange: (v: string) => void;
};

const Segmented: React.FC<SegmentedProps> = ({ label, value, options, onChange }) => (
  <div className='seg'>
    <div className='seg-label'>{label}</div>
    <div className='seg-row' role='radiogroup' aria-label={label}>
      {options.map(opt => (
        <button
          key={opt.value}
          type='button'
          className={`seg-btn ${value === opt.value ? 'active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          <span className='seg-title'>{opt.title}</span>
          {opt.hint ? <span className='seg-hint'>{opt.hint}</span> : null}
        </button>
      ))}
    </div>
  </div>
);

export default Segmented;
