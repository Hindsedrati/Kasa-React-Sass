import './Footer.scss'
import logo from '../../assets/logo_white.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Kaza"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer