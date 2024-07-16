import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '~pages/Layout';
import Home from '~pages/Home';
import './global.css';

const InfiniteScroll = lazy(() => import('./pages/InfiniteScroll'));
const Pagination = lazy(() => import('./pages/Pagination'));
const Solution = lazy(() => import('./pages/Solution'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scroll" element={<InfiniteScroll />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="solution" element={<Solution />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
