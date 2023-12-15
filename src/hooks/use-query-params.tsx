import { useRouter } from 'next/router';
import type { NextParsedUrlQuery } from 'next/dist/server/request-meta';

type UseQueryParams = [NextParsedUrlQuery, boolean];

export const useQueryParams = (): UseQueryParams => {
  const router = useRouter();

  const skip = !router.isReady;

  return [router.query, skip];
};
