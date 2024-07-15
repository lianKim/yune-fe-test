import { Dispatch, SetStateAction } from 'react';
import Icon from '~components/Icon';
import * as styles from './PagingNavigation.module.css';

interface PagingNavigationProps {
  totalPages: number;
  currPageId: number;
  onSetCurrPageId: Dispatch<SetStateAction<number>>;
}

export default function PagingNavigation({
  totalPages,
  currPageId,
  onSetCurrPageId,
}: PagingNavigationProps) {
  const handlePrevIconClick = () => {
    onSetCurrPageId((prev) => prev - 1);
  };

  const handleNextIconClick = () => {
    onSetCurrPageId((prev) => prev + 1);
  };

  const handlePageNumberClick = (pageId: number) => {
    if (pageId < 1 || pageId > totalPages) {
      alert('존재하지 않는 페이지입니다.');
      return;
    }

    onSetCurrPageId(pageId);
  };

  return (
    <div className={styles.container}>
      {/* Prev Button */}
      <button
        type="button"
        onClick={handlePrevIconClick}
        disabled={currPageId <= 1}
        className={styles.pageBtn}
      >
        <Icon name="ChevronLeft" fill="var(--color-gray-500)" />
      </button>
      {/* Page Number Buttons */}
      {Array.from({ length: totalPages }, (v, i) => i).map((idx) => {
        const page = idx + 1;

        return (
          <button
            type="button"
            onClick={() => handlePageNumberClick(page)}
            disabled={page === currPageId}
            className={`${styles.pageBtn} ${page === currPageId ? styles.active : ''}`}
            key={page}
          >
            {page}
          </button>
        );
      })}
      {/* Next Button */}
      <button
        type="button"
        onClick={handleNextIconClick}
        disabled={currPageId >= totalPages}
        className={styles.pageBtn}
      >
        <Icon name="ChevronRight" fill="var(--color-gray-500)" />
      </button>
    </div>
  );
}
