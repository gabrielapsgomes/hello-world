import {  useState, useEffect } from 'react'


const Personagens = () => {
    const [pessoas, setPessoas] = useState([])
useEffect(() =>{
 fetch('')
 .then(response => response.json())
 .then(data => setPessoas(data.results))
}, [])

     return (
      <>
        {pessoas.map(pessoa =>
           <div key={pessoa.id} >
           <p>{pessoa.name}</p> 
           <img src={pessoa.image} alt={pessoa.name}/>
       </div> 
            )}
      </>
    )
}


export default Personagens