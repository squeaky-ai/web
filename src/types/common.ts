export type ValueOf<T> = T[keyof T];

declare global {
  interface Window {
    squeaky: Squeaky;
  }
}

type ExternalAttributes = Record<string, string | number>;

interface Squeaky {
  identify: (id: string, input: ExternalAttributes) => void;
}

export type Currency = { 
  name: string; 
  symbol: string 
};

export type SubMenu = 'use-cases' | 'product' | 'more';

