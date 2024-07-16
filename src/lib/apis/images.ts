import axios from 'axios';
import {
  keepPreviousData,
  useQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const UNSPLASH_CLIENT_ID = 'kdkxcARkpp8ML82_dNDrvUZQdvSBxaprAtHP9e5De9M';
const IMAGES_PER_PAGE = 12;
export const TOTAL_PAGES = 5;

export interface ImageDataType {
  id: string;
  alt_description: string;
  urls: {
    small_s3: string;
  };
}

// Unsplash에서 페이지별로 이미지 받아오는 API
const fetchImageList = async ({ pageParam = 1 }): Promise<ImageDataType[]> => {
  const res = await axios.get(
    `${UNSPLASH_BASE_URL}/photos?page=${pageParam}&per_page=${IMAGES_PER_PAGE}&client_id=${UNSPLASH_CLIENT_ID}`,
  );

  return res?.data;
};

/**
 * for Infinite Scroll
 */
export const useScrollImageList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['imageList'],
    queryFn: fetchImageList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return nextPage > TOTAL_PAGES ? undefined : nextPage;
    },
  });
};

/**
 * for Pagination
 * @description keepPreviousData 사용을 위해 useSuspenseQuery 대신 useQuery 사용
 */
//
export const usePaginatedImageList = (pageId: number) => {
  return useQuery({
    queryKey: ['imageList', pageId],
    queryFn: () => fetchImageList({ pageParam: pageId }),
    enabled: pageId <= TOTAL_PAGES,
    placeholderData: keepPreviousData,
  });
};
