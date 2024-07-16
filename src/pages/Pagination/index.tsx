import { useState } from 'react';
import {
  ImageDataType,
  TOTAL_PAGES,
  usePaginatedImageList,
} from '~lib/apis/images';
import ImageCard from '~components/ImageCard';
import PagingNavigation from '~components/PagingNavigation';
import * as styles from './Pagination.module.css';

export default function Pagination() {
  const [currPageId, setCurrPageId] = useState<number>(1);
  const { data } = usePaginatedImageList(currPageId);

  return (
    <div className={styles.container}>
      {data && data.length > 0 && (
        <div className={styles.imageList}>
          {data.map((imgData: ImageDataType) => (
            <ImageCard data={imgData} key={imgData.id} />
          ))}
        </div>
      )}
      <PagingNavigation
        totalPages={TOTAL_PAGES}
        currPageId={currPageId}
        onSetCurrPageId={setCurrPageId}
      />
    </div>
  );
}
