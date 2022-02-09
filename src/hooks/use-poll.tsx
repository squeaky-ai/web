import React from 'react';

type PollCallback = () => boolean;

type Resolve = (success: boolean) => void;

function poll(callback: PollCallback, timeout = 5000, interval = 250) {
  const endAt = new Date().valueOf() + timeout;

  const checkCondition = function(resolve: Resolve): void {
    const result = callback();

    if (result) {
      return resolve(true);
    }
    
    if (new Date().valueOf() < endAt) {
      return void setTimeout(checkCondition, interval, resolve);
    }

    return resolve(false);
  }

  return new Promise(checkCondition);
}

export const usePoll = (callback: PollCallback): boolean => {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    poll(callback).then(success => setLoaded(success));
  }, []);

  return loaded;
};
