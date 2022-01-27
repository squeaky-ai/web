export type ValueOf<T> = T[keyof T];

export type Currency = { 
  name: string; 
  symbol: string 
};

export type SubMenu = 'use-cases' | 'product' | 'more';
