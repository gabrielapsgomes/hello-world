import {  useState, useEffect } from 'react'

const Busca = () => {
    const [busca, setBusca] =useState('')
    const [pessoas, setPessoas] = useState([])
    const [pessoasFiltradas, setPessoasFiltradas] = useState([])

useEffect(() =>{
     fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setPessoas(data.results))
}, [])

useEffect(() =>{
 setPessoasFiltradas(pessoas.filter(pessoa => 
    pessoa.name.includes(busca)
    ))

}, [pessoas, busca])

     return (
      <>
      <input placeholder='Digite o nome do personagem'
       onChange={e=> setBusca (e.target.value)}
       />
        {pessoasFiltradas.map(pessoa =>
           <div key={pessoa.id} >
           <p>{pessoa.name}</p> 
           <img src={pessoa.image} alt={pessoa.name}/>
       </div> 
            )}
      </>
    )
}


export default Busca