import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { debounce } from 'lodash';
import { range } from 'lodash';
import { Button } from 'components/button';

interface Props {
  children: React.ReactNode;
}

interface State {
  index: number;
}

export class Carousel extends React.Component<Props, State> {
  private timer: NodeJS.Timeout;
  private initialSwipeX: number;
  private items: React.ReactNode;

  public constructor(props: Props) {
    super(props);

    this.state = { index: 0 };

    const kids = React.Children.toArray(this.props.children);
    // Duplicate the first one and add it to the end so that we
    // can transition to it, and fake an infinite scroll
    const firstBorn = { ...(kids[0] as any), key: `0.${this.count + 1}` };
    this.items = [...kids, firstBorn];
  }

  public componentDidMount(): void {
    this.start();
  }

  public componentWillUnmount(): void {
    clearTimeout(this.timer);
    this.timer = null;
  }

  private start = (interval = 5000) => {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      const restart = this.state.index === this.count;

      this.setState({ index: restart ? 0 : this.state.index + 1 });

      // Skip the fake step
      this.start(restart ? 0 : 5000);
    }, interval);
  };

  private onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    this.initialSwipeX = event.touches[0].clientX;
  };

  private onChange = (index: number) => {
    this.setState({ index });
    this.start();
  };

  private onTouchMove = debounce((event: React.TouchEvent<HTMLDivElement>) => {
    if (this.initialSwipeX === null) {
      return;
    }

    const currentSwipeX = event.touches[0].clientX;
    const diffX = this.initialSwipeX - currentSwipeX;
    const index = diffX > 0 ? this.state.index + 1 : this.state.index - 1;

    this.onChange(index);

    this.initialSwipeX = null;
  }, 100)

  private get count() {
    return React.Children.count(this.props.children);
  }
 
  public render(): JSX.Element {
    return (
      <div className='carousel' onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove}>
        <div 
          className='slide'
          style={{ 
            transform: `translateX(-${this.state.index * 100}%)`,
            transition: this.state.index === 0 ? 'none' : 'transform .5s cubic-bezier(.46, .03, .52, .96)',
          }}
        >
          {this.items}
        </div>
        <div className='indicator'>
          {range(0, this.count).map(i => (
            <Button 
              key={i}
              onClick={() => this.onChange(i)} 
              // If the index is >= the count then we're in the fake first position 
              // which is actually the nth+1 position (for the inifite scrolling)
              className={classnames({ active: i === (this.state.index >= this.count ? 0 : this.state.index) })}
              aria-label={`Carousel position ${i}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export const CarouselItem: FC<Props> = ({ children }) => (
  <div className='item'>
    {children}
  </div>
);
