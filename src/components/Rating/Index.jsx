import redstar from "../../assets/redStar.svg";
import greystar from "../../assets/greyStar.svg";

/* Pour l'affichage des avis sur les logements */
function Rating ({ rating }) { 
	// Composant fonctionnel Rating prenant une prop rating
	const stars = [1, 2, 3, 4, 5];
	 // Déclaration d'un tableau de 5 éléments
  
	return ( // Rendu JSX
	  <div className="product__content__right__rate"> 
	  {/* Div contenant les étoiles */}
		{stars.map((star) => 
		// Boucle map sur les étoiles
		  rating >= star ? ( 
			// Si la note est supérieure ou égale au nombre d'étoiles actuel
			<img key={star.toString()} className="product__content__right__rate__icon" src={redstar} alt="Evaluation du logement" /> 
			// Rendu de l'étoile rouge
		  ) : ( // Sinon
			<img key={star.toString()} className="product__content__right__rate__icon" src={greystar} alt="Evaluation du logement" /> 
			// Rendu de l'étoile grise
		  )
		)}
	  </div>
	);
  };
  
  export default Rating; 
  // Exportation du composant Rating par défaut
  