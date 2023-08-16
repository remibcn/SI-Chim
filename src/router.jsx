/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Sols from './components/Sols';
import Cuisine from './components/Cuisine';
import OurProducts from './pages/OurProducts';

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Sols',
        element: <Sols />,
      },
      {
        path: '/Nos-Produits/Cuisine',
        element: <Cuisine />,
      },
      {
        path: '/Nos-Produits',
        element: <OurProducts />,
      },
    ],
  },
]);

export default router;
