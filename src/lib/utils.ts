/**
 * Intended to replace lodash as it makes the bundle huge
 */

export const range = (size: number): number[] => {
  return Array(size).fill(1).map((x, y) => (x + y) - 1);
};

export const truncate = (string: string = '', size: number): string => {
  if (string.length <= size) {
    return string;
  }

  return string.slice(0, size) + '...';
};

export const uniq = (items: string[]): string[] => {
  const set = new Set(items);
  return Array.from(set);
};

export function debounce(callback: Function, wait: number) {
  let timeout: number = null;

  return (...args: any) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

export function throttle(callback: Function, wait: number) {
  let lastTime: number;
  let inThrottle: boolean;
  let lastCallback: NodeJS.Timeout;

  return function(this: any) {
    const context = this;
    const args = arguments;

    if (!inThrottle) {
      callback.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastCallback);

      lastCallback = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          callback.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
