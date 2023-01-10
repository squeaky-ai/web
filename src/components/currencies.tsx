import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { getCurrencySymbol } from 'lib/currency';
import { Currency } from 'types/graphql';

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

    window.squeaky?.addEvent('CurrencyChanged', { currency: selected });
  };

  return (
    <div className={classnames('currencies', { open })}>
      <Button onClick={toggleOpen}>
        <b>{selected}</b> ({getCurrencySymbol(selected)})
        <Icon name='arrow-drop-down-line' className='arrow' />
      </Button>
      {open && (
        <div className='options'>
          <Button key={Currency.Eur} onClick={() => handleChange(Currency.Eur)}>
            <b>{Currency.Eur}</b> ({getCurrencySymbol(Currency.Eur)})
          </Button>
          <Button key={Currency.Gbp} onClick={() => handleChange(Currency.Gbp)}>
            <b>{Currency.Gbp}</b> ({getCurrencySymbol(Currency.Gbp)})
          </Button>
          <Button key={Currency.Usd} onClick={() => handleChange(Currency.Usd)}>
            <b>{Currency.Usd}</b> ({getCurrencySymbol(Currency.Usd)})
          </Button>
        </div>
      )}
    </div>
  );
};
