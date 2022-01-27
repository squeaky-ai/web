import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface DelayedProps {
  delay: number;
  initialDelayed?: boolean;
}

export const Button: FC<Props> = ({ children, className, color, ...rest }) => (
  <button className={classnames('button', color, className)} {...rest}>
    {children}
  </button>
);

export const DelayedButton: FC<Props & DelayedProps> = ({ children, onClick, delay, initialDelayed, ...rest }) => {
  const [disabled, setDisabled] = React.useState<boolean>(initialDelayed ?? true);

  React.useEffect(() => {
    setTimeout(() => {
      disabled && setDisabled(false);
    }, delay);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDisabled(true);
    onClick(event);
  };

  return (
    <Button disabled={disabled} onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};
