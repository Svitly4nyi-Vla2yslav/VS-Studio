import type { SegmentOption } from './types';

type SegmentedProps = {
  label: string;
  value: string[];
  options: readonly SegmentOption[];
  onChange: (next: string[]) => void;
};

/**
 * Рендерить доступну групу незалежних опцій із семантикою checkbox.
 * Приймає поточний масив значень і повертає новий масив через `onChange`:
 * натиснута опція вилучається, якщо вже активна, або додається в кінець.
 */
const Segmented: React.FC<SegmentedProps> = ({ label, value, options, onChange }) => (
  <div className='seg'>
    <div className='seg-label'>{label}</div>
    <div className='seg-row' role='group' aria-label={label}>
      {options.map(opt => (
        <button
          key={opt.value}
          type='button'
          role='checkbox'
          aria-checked={value.includes(opt.value)}
          className={`seg-btn ${value.includes(opt.value) ? 'active' : ''}`}
          onClick={() =>
            onChange(
              value.includes(opt.value) ? value.filter(item => item !== opt.value) : [...value, opt.value]
            )
          }
        >
          <span className='seg-title'>{opt.title}</span>
          {opt.hint ? <span className='seg-hint'>{opt.hint}</span> : null}
        </button>
      ))}
    </div>
  </div>
);

export default Segmented;
