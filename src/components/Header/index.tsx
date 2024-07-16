import { Link } from 'react-router-dom';
import * as styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.logo}>Yune Projects</h1>
      </Link>
    </header>
  );
}
