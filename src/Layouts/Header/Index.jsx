import './Header.scss'
import {Link} from 'react-router-dom'
import Logo from '../../assets/LOGO.png'

function Header(){
  return (
        <header className='container header__container'>
            <img className='header__container__logo' src={Logo} alt="Logo de kasa" />
            <nav className='header__container__link'>
                <Link className='header__link__child header__link__child--active' to="/">Accueil</Link>
                <Link className='header__link__child' to="/a-propos">A Propos</Link>
            </nav>
        </header>
        
  )
}

export default Header 