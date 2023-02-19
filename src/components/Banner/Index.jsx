import './banner.scss'
import Image from '../../assets/Home-banner.png'

// Définition d'un composant fonctionnel Banner
function Banner() {
    // Retourne le code JSX qui définit la bannière
    return (
        <section className='banner'>
            <div className='banner__style'></div>
            <img src={Image} alt="Paysage" className='banner__img' />
            <p className='banner__txt'>Chez vous, partout et ailleurs</p>
        </section>
    )
}

// Exporte le composant Banner pour être utilisé ailleurs
export default Banner
