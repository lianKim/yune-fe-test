import { memo } from 'react';
import { ImageDataType } from '~lib/apis/images';
import * as styles from './ImageCard.module.css';

interface ImageCardProps {
  data: ImageDataType;
  isAnimating?: boolean;
}

export default memo(function ImageCard({ data, isAnimating }: ImageCardProps) {
  return (
    <div
      className={`${styles.imageContainer} ${isAnimating ? styles.upAnimation : ''}`}
    >
      <img
        loading="lazy"
        src={data.urls.small_s3}
        alt={data.alt_description}
        className={styles.image}
      />
    </div>
  );
});
