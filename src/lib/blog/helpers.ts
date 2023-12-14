import type { NextRouter } from 'next/router';

export function buildCategoryUrl(router: NextRouter, category: string | null): string {
  const path = '/blog';
  const [, query] = router.asPath.split('?');
  const queryString = `${query ? `?${query}` : ''}`;

  if (!category) {
    return `${path}${queryString}`;
  }

  return `${path}/${category.toLowerCase().replace(/ /g, '-')}${queryString}`;
};
