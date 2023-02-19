import './Header.scss' 
import {Link} from 'react-router-dom' 
// Importe le composant Link de React Router pour la navigation
import Logo from '../../assets/LOGO.png' 
// Importe l'image du logo de Kasa depuis les assets

function Header(){
  return (
        <header className='container header__container'> 
            <img className='header__container__logo' src={Logo} alt="Logo de kasa" /> 
            <nav className='header__container__link'> 
                <Link className='header__link__child header__link__child--active' to="/">Accueil</Link> 
                {/* Lien vers la page d'accueil */}
                <Link className='header__link__child' to="/a-propos">A Propos</Link>
                 {/* Lien vers la page "A propos" */}
            </nav>
        </header>
  )
}

export default Header
