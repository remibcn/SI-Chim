/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SolsProducts from './pages/SolsProducts';
import CuisineProducts from './pages/CuisineProducts';
import SanitaireProduct from './pages/SanitaireProducts';
import VitresSurfacesProducts from './pages/Vitres&SurfacesProducts';
import EntretienSpecifiqueProducts from './pages/EntretienSpecifique';
import EntretienAutoProducts from './pages/EntretienAutoProducts';
import SUPERDECRASSSOL from './components/Sols/SUPERDECRASSSOLS';

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
        path: '/Produits/Sanitaire',
        element: <SanitaireProduct />,
      },
      {
        path: '/Produits/Cuisine',
        element: <CuisineProducts />,
      },
      {
        path: '/Produits/Vitres&Surfaces',
        element: <VitresSurfacesProducts />,
      },
      {
        path: '/Produits/Sols/SUPERDECRASSSOLS',
        element: <SUPERDECRASSSOL />,
      },
      {
        path: '/Produits/EntretienSpecifique',
        element: <EntretienSpecifiqueProducts />,
      },
      {
        path: '/Produits/EntretienAuto',
        element: <EntretienAutoProducts />,
      },
    ],
  },
]);

export default router;
