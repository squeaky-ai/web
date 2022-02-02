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

  public constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  public componentDidMount(): void {
    clearTimeout(this.timer);

    this.timer = this.auto();
  }

  public componentWillUnmount(): void {
    clearTimeout(this.timer);
    this.timer = null;
  }

  private auto = () => setTimeout(() => {
    this.setState(state => ({ 
      index: state.index === this.count ? 0 : state.index + 1 
    }));

    this.auto();
  }, 5000)

  private onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    this.initialSwipeX = event.touches[0].clientX;
  };

  private onTouchMove = debounce((event: React.TouchEvent<HTMLDivElement>) => {
    if (this.initialSwipeX === null) {
      return;
    }

    const currentSwipeX = event.touches[0].clientX;
    const diffX = this.initialSwipeX - currentSwipeX;

    this.setState(state => ({
      index: diffX > 0 ? state.index + 1 : state.index - 1
    }));

    this.initialSwipeX = null;
  }, 100)

  private get count() {
    return React.Children.count(this.props.children);
  }

  private get children() {
    const kids = React.Children.toArray(this.props.children);
    // Duplicate the first one and add it to the end so that we
    // can transition to it, and fake an infinite scroll
    const firstBorn = { ...(kids[0] as any), key: `0.${this.count + 1}` };
    return [...kids, firstBorn];
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
          {this.children}
        </div>
        <div className='indicator'>
          {range(0, this.count).map(i => (
            <Button 
              key={i}
              onClick={() => this.setState({ index: i })} 
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
