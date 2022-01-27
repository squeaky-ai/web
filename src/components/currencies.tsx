import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { CURRENCIES } from 'data/common/constants';
import type { Currency } from 'types/common';
import { Button } from 'components/button';
import { Icon } from 'components/icon';

interface Props {
  selected: Currency;
  setSelected: (selected: Currency) => void;
}

export const Currencies: FC<Props> = ({ selected, setSelected }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOpen = () => setOpen(!open);

  const handleChange = (selected: Currency) => {
    setSelected(selected);
    setOpen(false);
  };

  return (
    <div className={classnames('currencies', { open })}>
      <Button onClick={toggleOpen}>
        <b>{selected.name}</b> ({selected.symbol})
        <Icon name='arrow-drop-down-line' className='arrow' />
      </Button>
      {open && (
        <div className='options'>
          {CURRENCIES.map(currency => (
            <Button key={currency.name} onClick={() => handleChange(currency)}>
              <b>{currency.name}</b> ({currency.symbol})
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
