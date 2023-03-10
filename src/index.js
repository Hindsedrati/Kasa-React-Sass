import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Index';
import About from './pages/About/Index';
import Logement from './pages/Logement/Index';
import Error from './pages/Error/Index';

import Header from './Layouts/Header/Index';
import Footer from './Layouts/Footer/Index';

import './style.css';

// Création de la racine pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/a-propos" element={ <About/> } />
          <Route path="/logements" element={ <Logement/> } />
          <Route path="*" element={ <Error/> } />
            {/* (*) ça veut dire que tout ce qu'est différent des autres pages se dirige vers la page d'erreur */}
        </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
  /* La propriété 'StrictMode' active des vérifications supplémentaires et peut générer des avertissements dans la console du navigateur */
);
