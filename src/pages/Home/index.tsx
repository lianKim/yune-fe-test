import { Link } from 'react-router-dom';
import * as styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link to="/scroll">
        <h2>Infinite Scroll</h2>
      </Link>
      <Link to="/pagination">
        <h2>Pagination</h2>
      </Link>
      <Link to="/solution">
        <h2>Solution</h2>
      </Link>
    </div>
  );
}
