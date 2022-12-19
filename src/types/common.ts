import type { Currency as CurrencySymbol } from 'types/graphql';

export type ValueOf<T> = T[keyof T];

declare global {
  interface Window {
    squeaky: Squeaky;
  }
}

type ExternalAttributes = Record<string, string | number>;

interface Squeaky {
  identify: (id: string, input: ExternalAttributes) => void;
  addEvent: (name: string, input: ExternalAttributes) => void;
}

export type Currency = { 
  name: CurrencySymbol; 
  symbol: string 
};

export type SubMenu = 'use-cases' | 'product' | 'more';
