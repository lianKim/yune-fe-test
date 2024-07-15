import { Image } from '~apis/images';
import * as styles from './ImageCard.module.css';

interface ImageCardProps {
  data: Image;
  isAnimating?: boolean;
}

export default function ImageCard({ data, isAnimating }: ImageCardProps) {
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
}
