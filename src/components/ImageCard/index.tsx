import { ImageDataType } from '~apis/images';
import * as styles from './ImageCard.module.css';
import { memo } from 'react';

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
        src={data.urls.small_s3}
        alt={data.alt_description}
        className={styles.image}
      />
    </div>
  );
});
