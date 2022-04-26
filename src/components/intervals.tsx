import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Interval } from 'lib/currency';

interface Props {
  selected: Interval;
  setSelected: (selected: Interval) => void;
}

export const Intervals: FC<Props> = ({ selected, setSelected }) => (
  <div className='intervals'>
    <Button className={classnames({ selected: selected === Interval.MONTHLY })} onClick={() => setSelected(Interval.MONTHLY)}>
      Pay monthly
    </Button>
    <Button className={classnames({ selected: selected === Interval.YEARLY })} onClick={() => setSelected(Interval.YEARLY)}>
      Pay yearly <span>-20%</span>
    </Button>
  </div>
);
