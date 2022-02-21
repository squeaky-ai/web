import type { NextRouter } from 'next/router';

export function buildCategoryUrl(router: NextRouter, category: string | null): string {
  const [path, query] = router.asPath.split('?');

  if (!category) {
    return path;
  }

  const params = new URLSearchParams(query);

  params.set('category', category);

  return `${path}?${params.toString()}`;
};

export function buildTagsUrl(router: NextRouter, tag: string): string {
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

export function getStringQueryParam(param: string | string[]): string | null {
  if (!param) return null;

  return Array.isArray(param) ? param.join('') : param;
}

export function getArrayQueryParam(param: string | string[]): string[] {
  if (!param) return [];

  return Array.isArray(param) ? param : [param]
}
