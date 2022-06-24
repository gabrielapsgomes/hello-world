import Menu from '../../components/Menu'
import RickAndMorty from '../../assets/Imagem.jpg'

import './style.css'

const Home = () => {
    return (
        <div className='page'>
            <Menu />
            <h1>Home</h1>
            <img className='foto' src={RickAndMorty} alt='ImagemM' />
        </div>
    )
}

export default Home