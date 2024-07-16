import { useEffect, Fragment, Suspense } from 'react';
import { useScrollImageList } from '~lib/apis/images';
import { useIntersectionObserver } from '~lib/hooks/useIntersectionObserver';
import ImageCard from '~components/ImageCard';
import * as styles from './InfiniteScroll.module.css';

export default function InfiniteScroll() {
  const { data, fetchNextPage, isFetchingNextPage } = useScrollImageList();
  const { targetRef, isInView } = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (!isInView) return;

    fetchNextPage();
  }, [isInView, fetchNextPage]);

  return (
    <Suspense fallback={<div>Loading images...</div>}>
      {data && data.pages.length > 0 && (
        <div className={styles.container}>
          <div className={styles.imageList}>
            {data.pages.map((page, i) => (
              <Fragment key={i}>
                {page.length > 0 &&
                  page.map((imgData) => (
                    <ImageCard isAnimating data={imgData} key={imgData.id} />
                  ))}
              </Fragment>
            ))}
          </div>
          {!isFetchingNextPage && <div ref={targetRef} />}
        </div>
      )}
    </Suspense>
  );
}
