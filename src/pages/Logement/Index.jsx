// Import de la fonction useLocation depuis la bibliothèque react-router-dom
import { useLocation } from "react-router-dom";

// Import de la liste des logements et du style associé
import { logements } from '../../data/logements'
import './Logement.scss';

// Import de plusieurs composants
import Rating from '../../components/Rating/Index';
import Host from '../../components/Host/Index';
import Slide from '../../components/Slide/Index';
import Tags from '../../components/Tags/Index';
import Collapse from '../../components/Collapse/Index';
import Error from '../Error/Index'

// Définition de la fonction Logement qui affiche les détails d'un logement
function Logement() {

// Utilisation de la fonction useLocation pour récupérer l'URL courante
const loc = useLocation()

// Extraction du paramètre "id" de l'URL
const params = new URLSearchParams(loc.search)
// URLSearchParams est utilisé pour extraire l'ID du logement à partir de l'URL, puis pour rechercher ce logement dans la liste logements importée à partir du fichier data/logements.js
const logementId = params.get("id")   
//extrait la valeur de la clé "id" de l'objet URLSearchParams stocké dans la variable params

// Récupération du logement correspondant à l'id récupéré précédemment
const logement = logements.find((logement) => logement.id === logementId)

// Vérification que le logement a bien été trouvé, sinon affichage de la page d'erreur
if(logement === undefined) {
    return ( <Error /> )
}

// Extraction des données du logement pour les afficher dans le rendu
const { title, location, rating, host, equipments, description, pictures } = logement;

// Rendu du composant Logement avec toutes les informations
return (
    <main className="product">
        <Slide slides={pictures} />
        <div className="product__content">
            <div className="product__content__left">
                <h1 className="product__content__left__title">{title}</h1>
                <p className="product__content__left__location">{location}</p>
                <ul className="product__content__left__tags">
                    {/* Parcours des tags du logement pour les afficher */}
                    {logement.tags.map((tag, index) => (
                    <Tags key={index} getTag={tag} />
                    ))}
                </ul>
            </div>
            <div className="product__content__right">
                {/* Affichage du composant Host avec les données du logement */}
                <Host host={host} />
                {/* Affichage du composant Rating avec les données du logement */}
                <Rating rating={rating} />
            </div>
        </div>
        <div className="product__info">
            {/* Affichage d'un composant Collapse pour la description et les équipements du logement */}
            <Collapse categorie="product" title="Description" content={description} />
            <Collapse categorie="product" title="Équipements" content={equipments} />
        </div>
        {/*cette partie du code génère une liste de tags du logement en utilisant la méthode map pour itérer sur 
        chaque élément du tableau tags de l'objet logement, puis crée un composant Tags pour chaque élément du tableau.*/}
    </main>
);

    }

export default Logement;