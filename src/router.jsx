/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SolsProducts from './pages/SolsProducts';
import SiFour from './components/Sols/SiFour';
import CuisineProducts from './pages/CuisineProducts';

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Produits/Sols',
        element: <SolsProducts />,
      },
      {
        path: '/Produits/Cuisine',
        element: <CuisineProducts />,
      },
      {
        path: '/Produits/Sols/SiFour',
        element: <SiFour />,
      },
    ],
  },
]);

export default router;
