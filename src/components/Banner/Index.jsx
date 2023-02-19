import './banner.scss'
import Image from '../../assets/Home-banner.png'

function Banner() {
    return (
        <section className='banner'>
            <div className='banner__style'></div>
            <img src={Image} alt="Paysage" className='banner__img' />
            <p className='banner__txt'>Chez vous, partout et ailleurs</p>
        </section>
    )
}

export default Banner