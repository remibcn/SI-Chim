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
import Calc from './components/Sanitaire/Calc';
import Deo from './components/Sanitaire/Deo';
import Odor2D from './components/Sols/Odor2D';
import Odor from './components/Sols/Odor';
import SiSol from './components/Sols/SiSol';
import VitreEco from './components/VitresSurfaces/VitreEco';
import SiRince from './components/Cuisine/SiRince';
import LaveEauDure from './components/Cuisine/LaveEauDure';
import Plonge from './components/Cuisine/Plonge';
import Detart from './components/Cuisine/Detart';
import Four from './components/Cuisine/Four2+';
import SpeedFlash from './components/Cuisine/SpeedFlash';
import Net from './components/Cuisine/Net';
import VitrePlus from './components/VitresSurfaces/VitrePlus';

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
        path: '/Produits/Sanitaire/CALC',
        element: <Calc />,
      },
      {
        path: '/Produits/Sanitaire/Deo',
        element: <Deo />,
      },
      {
        path: '/Produits/Sols/Odor2D',
        element: <Odor2D />,
      },
      {
        path: '/Produits/Sols/Odor',
        element: <Odor />,
      },
      {
        path: '/Produits/Sols/SiSol',
        element: <SiSol />,
      },
      {
        path: '/Produits/VitresSurfaces/VitreEco',
        element: <VitreEco />,
      },
      {
        path: '/Produits/Cuisine/SiRince',
        element: <SiRince />,
      },
      {
        path: '/Produits/Cuisine/LaveEauDure',
        element: <LaveEauDure />,
      },
      {
        path: '/Produits/Cuisine/Plonge',
        element: <Plonge />,
      },
      {
        path: '/Produits/Cuisine/SpeedFlash',
        element: <SpeedFlash />,
      },
      {
        path: '/Produits/VitresSurfaces/VitrePlus',
        element: <VitrePlus />,
      },
      {
        path: '/Produits/Cuisine/Net',
        element: <Net />,
      },
      {
        path: '/Produits/Cuisine/Detart',
        element: <Detart />,
      },
      {
        path: '/Produits/Cuisine/Four2+',
        element: <Four />,
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
