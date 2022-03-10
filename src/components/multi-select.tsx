import React from 'react';
import type { FC } from 'react';
import { Input } from 'components/input';
import { Icon } from 'components/icon';
import { Checkbox } from 'components/checkbox';

interface Props {
  options: string[];
  defaultSelected: string[];
  onUpdate: (selected: string[]) => void;
}

export const MultiSelect: FC<Props> = ({ options, defaultSelected, onUpdate }) => {
  const ref = React.useRef<HTMLDivElement>();

  const [open, setOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string[]>(defaultSelected);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleBodyClick = (event: MouseEvent) => {
    const element = event.target as HTMLElement;

    if (ref.current && !ref.current.contains(element)) {
      handleClose();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;

    const update = selected.includes(option)
      ? selected.filter(s => s !== option)
      : [...selected, option];

    setSelected(update);
    onUpdate(update);
  };

  React.useEffect(() => {
    window.addEventListener('click', handleBodyClick);

    return () => {
      window.removeEventListener('click', handleBodyClick, true);
    }
  }, []);

  return (
    <div ref={ref} className='multi-select'>
      <Input 
        type='text'
        readOnly
        value={`${selected.length} selected`}
        onClick={handleOpen}
      />
      <Icon name='arrow-drop-down-line' />

      {open && (
        <div className='multi-select-options'>
          {options.map(option => (
            <Checkbox 
              key={option} 
              className='option' 
              name='multi-select-option' 
              value={option}
              onChange={handleChange}
              checked={selected.includes(option)}
            >
              {option}
            </Checkbox>
          ))}
        </div>
      )}
    </div>
  );
};
