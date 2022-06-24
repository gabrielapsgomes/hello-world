import { useState } from 'react'

const ContaClick = () => {
    const[clique, setClique] = useState(0)
    function handleClick() {
        setClique(clique +1)
    }
return (
<>
  <h1>Eu cliquei {clique} vezes</h1>
  <button onClick={handleClick}>Clica aqui</button>
</>
)
}

export default ContaClick