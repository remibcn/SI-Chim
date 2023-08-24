/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SolsProducts from './pages/SolsProducts';
import Cuisine from './components/Cuisine';
import SiFour from './components/Sols/SiFour';

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
        element: <Cuisine />,
      },
      {
        path: '/Produits/Sols/SiFour',
        element: <SiFour />,
      },
    ],
  },
]);

export default router;
