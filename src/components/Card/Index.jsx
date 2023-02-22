// Importation de la feuille de style Sass pour le composant Card
import './Card.scss'

// Importation du composant Link de react-router-dom pour naviguer vers les pages de détails de logements
import { Link } from 'react-router-dom'

// Importation des données de logemen
import { logements } from '../../data/logements'

/* Composant Card qui permet de générer les cartes des logements */
function Card () {
    return (
        <section className='logements'>
            <div className='logements__list'>
                {/* Parcourir les données de logements et afficher les cartes correspondantes */}
                {logements.map(({ id, cover, title }) =>
                    <article key={id} className='logements__list__content'>
                        {/* Navigation vers la page de détails du logements en utilisant le composant Link */}
                        <Link to={`/logements?id=${id}`}>
                            <div className="logements__list__content__style"></div>
                            <img className='logements__list__content__cover' src={cover} alt={`Logement ${title}`} />
                            <p className="logements__list__content__name">{title}</p>
                        </Link>
                    </article>
                )}
            </div>
        </section>
    )
}

// Exportation du composant Card pour une utilisation dans d'autres fichiers
export default Card