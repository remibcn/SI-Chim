/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SolsProducts from './pages/SolsProducts';
import CuisineProducts from './pages/CuisineProducts';
import SanitaireProduct from './pages/SanitaireProducts';
import VitresSurfacesProducts from './pages/VitresSurfaces';
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
import VitreEco from './components/VitresSurfacesProducts/VitreEco';
import SiRince from './components/Cuisine/SiRince';
import LaveEauDure from './components/Cuisine/LaveEauDure';
import Plonge from './components/Cuisine/Plonge';
import Detart from './components/Cuisine/Detart';
import Four from './components/Cuisine/Four2+';
import SpeedFlash from './components/Cuisine/SpeedFlash';
import Net from './components/Cuisine/Net';
import VitrePlus from './components/VitresSurfacesProducts/VitrePlus';
import Menage from './components/VitresSurfacesProducts/Menage';
import AntiMousse from './components/EntretienSpecifique/AntiMousse';
import DecapSim from './components/EntretienSpecifique/DecapSim';
import Algues from './components/EntretienSpecifique/Algues';
import Force from './components/EntretienSpecifique/Force';
import OdorPin from './components/EntretienSpecifique/OdorPin';
import Repulsif from './components/EntretienSpecifique/Repulsif';
import Jantes from './components/EntretienAuto/Jantes';
import Wash from './components/EntretienAuto/Wash';
import Turbonet from './components/EntretienAuto/Turbonet';
import LaveGlaces from './components/EntretienAuto/LaveGlaces';
import AntiGraffitiPage from './pages/AntiGraffitiPage';
import NPGRAFF from './components/AntiGraffiti/NP';
import NDGRAFF from './components/AntiGraffiti/ND';

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
        path: '/Produits/Antigraffiti',
        element: <AntiGraffitiPage />,
      },
      {
        path: '/Produits/Cuisine',
        element: <CuisineProducts />,
      },
      {
        path: '/VitresSurfaces',
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
        path: '/Produits/AntiGraffiti/NPGRAFF',
        element: <NPGRAFF />,
      },
      {
        path: '/Produits/AntiGraffiti/NDGRAFF',
        element: <NDGRAFF />,
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
        path: '/VitresSurfaces/VitreEco',
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
        path: '/Produits/EntretienSpecifique/AntiMousse',
        element: <AntiMousse />,
      },
      {
        path: '/Produits/EntretienAuto/Wash',
        element: <Wash />,
      },
      {
        path: '/Produits/EntretienAuto/Jantes',
        element: <Jantes />,
      },
      {
        path: '/Produits/EntretienAuto/LaveGlaces',
        element: <LaveGlaces />,
      },
      {
        path: '/Produits/EntretienAuto/Turbonet',
        element: <Turbonet />,
      },
      {
        path: '/Produits/EntretienSpecifique/DecapSim',
        element: <DecapSim />,
      },
      {
        path: '/Produits/EntretienSpecifique/Algues',
        element: <Algues />,
      },
      {
        path: '/Produits/EntretienSpecifique/Force',
        element: <Force />,
      },
      {
        path: '/Produits/EntretienSpecifique/OdorPin',
        element: <OdorPin />,
      },
      {
        path: '/Produits/EntretienSpecifique/Repulsif',
        element: <Repulsif />,
      },
      {
        path: '/VitresSurfaces/VitrePlus',
        element: <VitrePlus />,
      },
      {
        path: '/VitresSurfaces/Menage',
        element: <Menage />,
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
