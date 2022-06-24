import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/sobre"> Sobre</Link>
            </li>
            <li>
              <Link to="/personagens"> Personagens</Link>
            </li>
            <li>
              <Link to="Contato"> Contato</Link>
            </li>
            
        </ul>
    )
}

export default Menu