import type { NextRouter } from 'next/router';

export function buildCategoryUrl(router: NextRouter, category: string | null): string {
  const path = '/blog';
  const [, query] = router.asPath.split('?');
  const queryString = `${query ? `?${query}` : ''}`;

  if (!category) {
    return `${path}${queryString}`;
  }

  return `${path}/${category.toLowerCase()}${queryString}`;
};

export function buildTagUrl(router: NextRouter, tag: string): string {
  const [path, query] = router.asPath.split('?');

  const params = new URLSearchParams(query);
  const tags = params.getAll('tags');
  const exists = tags.includes(tag);

  const update = exists
    ? tags.filter(t => t !== tag)
    : [...tags, tag];

  params.delete('tags');

  for (const t of update) {
    params.append('tags', t);
  }

  return `${path}?${params.toString()}`;
};

export function buildTagsUrl(router: NextRouter, tags: string[]): string {
  const [path, query] = router.asPath.split('?');

  const params = new URLSearchParams(query);

  params.delete('tags');

  for (const tag of tags) {
    params.append('tags', tag);
  }

  return `${path}?${params.toString()}`;
}

export function getCategoryFromPathParam(param: string | string[]): string | null {
  if (!param) return null;

  return Array.isArray(param) ? param[0] : param;
}

export function getTagsFromQueryParam(param: string | string[]): string[] {
  if (!param) return [];

  return Array.isArray(param) ? param : [param]
}
