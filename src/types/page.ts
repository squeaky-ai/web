import type { Router } from 'next/router';
import type { NextPage } from 'next';
import type { NextComponentType, NextPageContext } from 'next';

export type SqueakyPageMeta = {
  title: string;
  description: string;
  index: boolean;
}

type GetSqueakyPageMeta<T> = (props: T, router: Router) => SqueakyPageMeta; 

export type SqueakyPage<T = {}> = NextPage<T> & {
  getMetaData: GetSqueakyPageMeta<T>;
}

export type SqueakyApp<T> = NextComponentType<NextPageContext, any, {}> & { 
  getMetaData: GetSqueakyPageMeta<T>;
}
