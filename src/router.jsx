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
import DECAP from './components/Sols/DECAP';
import MOQ from './components/Sols/MOQ';
import CLEAN from './components/Sols/CLEAN';
import PARK from './components/Sols/PARK';
import Contact from './components/Contact';
import CREMEMAINS from './components/Sanitaire/CremeMains';
import GelWC from './components/Sanitaire/GelWC';
import SaniClean from './components/Sanitaire/SaniClean';

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
        path: '/Contact',
        element: <Contact />,
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
        path: '/Produits/Sanitaire/CREMEMAINS',
        element: <CREMEMAINS />,
      },
      {
        path: '/Produits/Sanitaire/SaniClean',
        element: <SaniClean />,
      },
      {
        path: '/Produits/Sanitaire/GelWC',
        element: <GelWC />,
      },
      {
        path: '/Produits/Sols/DECAP',
        element: <DECAP />,
      },
      {
        path: '/Produits/Sols/MOQ',
        element: <MOQ />,
      },
      {
        path: '/Produits/Sols/PARK',
        element: <PARK />,
      },
      {
        path: '/Produits/Sols/CLEAN',
        element: <CLEAN />,
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
