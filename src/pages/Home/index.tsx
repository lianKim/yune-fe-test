import { Link } from 'react-router-dom';
import * as styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link to="/scroll">Infinite Scroll</Link>
      <Link to="/pagination">Pagination</Link>
      <Link to="/solution">Solution</Link>
    </div>
  );
}
