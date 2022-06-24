import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre'
import Personagens from '../pages/Personagens'
import Contato from '../pages/Contato'


const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/personagens" component={Personagens} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas