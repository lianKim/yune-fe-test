import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './global.css';

const Home = lazy(() => import('./pages/Home'));
const InfiniteScroll = lazy(() => import('./pages/InfiniteScroll'));
const Pagination = lazy(() => import('./pages/Pagination'));
const Solution = lazy(() => import('./pages/Solution'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="scroll" element={<InfiniteScroll />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="solution" element={<Solution />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
