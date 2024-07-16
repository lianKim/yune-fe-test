import { Outlet } from 'react-router-dom';
import Header from '~components/Header';
import * as styles from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
