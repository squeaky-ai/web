import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { range } from 'lib/utils';

interface Props {
  children: React.ReactNode;
  shadowless?: boolean;
}

interface State {
  index: number;
}

export class Carousel extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = { index: 0 };
  }

  private onChange = (index: number) => {
    this.setState({ index });
  };

  private onNext = () => {
    const index = this.state.index === this.count -1
      ? 0
      : this.state.index + 1;
    this.setState({ index });
  };

  private onPrevious = () => {
    const index = this.state.index === 0
      ? this.count - 1
      : this.state.index - 1;
    this.setState({ index });
  };

  private get count() {
    return React.Children.count(this.props.children);
  }
 
  public render(): JSX.Element {
    return (
      <div className='carousel'>
        <div className='slide' style={{ transform: `translateX(-${this.state.index * 100}%)` }}>
          {this.props.children}
        </div>
        <div className='controls'>
          <Button className='arrow back' onClick={this.onPrevious}>
            <Icon name='arrow-left-line' />
          </Button>
          <div className='indicator'>
            {range(this.count).map(i => (
              <Button
                key={i}
                onClick={() => this.onChange(i)}
                className={classnames({ active: i === this.state.index })}
                aria-label={`Carousel position ${i}`}
              />
            ))}
          </div>
          <Button className='arrow forward' onClick={this.onNext}>
            <Icon name='arrow-right-line' />
          </Button>
        </div>
      </div>
    );
  }
}

export const CarouselItem: FC<Props> = ({ children, shadowless }) => (
  <div className={classnames('item', { shadowless })}>
    {children}
  </div>
);
