// Import de la bibliothèque React et de la fonction useState
import React, {useState} from 'react';

// Import du fichier de style Slide.scss
import './Slide.scss';

// Import des images flèches
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

// Définition du composant Slide qui prend un tableau de slides en paramètre
function Slide ({ slides }) {
// Utilisation de useState pour la gestion de l'état du composant
const [current, setCurrent] = useState(0);
const length = slides.length;

/* Fonction appliquée au bouton suivant pour passer à l'image suivante */
const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
};

/* Fonction appliquée au bouton précédent pour revenir à l'image précédente */
const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

return (
  // Affichage du composant Slide
  <div className="slide">

    {/* Utilisation de la méthode map pour parcourir le tableau de slides et retourner les images */}
    {slides.map((picture, index) => {
      return (
        <div key={index} className={ 
          index === current ? "slide active" : "slide inactive" }>
          
          {/* Condition pour n'afficher que l'image correspondant à l'index courant */}
          {index === current && (
            <div>
              <img src={picture} alt="" className="slide__picture" />
              <p className="slide__count">{current + 1}/{length}</p>
            </div> 
          )}
        </div>
      );
    })}
    {/* Condition pour n'afficher les flèches de navigation que s'il y a plus d'une image */}
    {length > 1 ? (
      <div>
        <div className="slide__previous" onClick={prevSlide}>
          <img src={arrowLeft} alt="" className="slide__previous__icon" />
        </div>
        <div className="slide__next" onClick={nextSlide}>
          <img src={arrowRight} alt="" className="slide__next__icon" />
        </div>
        </div>
    ) : null}
  </div>
  );
};

// Exportation du composant Slide pour pouvoir l'utiliser ailleurs dans l'application
export default Slide;
