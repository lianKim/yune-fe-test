import { useEffect, Fragment, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScrollImageList } from '~apis/images';
import ImageCard from '~components/ImageCard';
import * as styles from './InfiniteScroll.module.css';

export default function InfiniteScroll() {
  const { data, fetchNextPage, isFetchingNextPage } = useScrollImageList();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    fetchNextPage();
  }, [inView]);

  return (
    <Suspense fallback={<div>Loading images...</div>}>
      {data && data.pages.length > 0 && (
        <div>
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
          {!isFetchingNextPage && <div ref={ref}>...</div>}
        </div>
      )}
    </Suspense>
  );
}
