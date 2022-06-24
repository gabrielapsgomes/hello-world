const Events = () => {
function handleInput(e) {
   console.log(e.target.value)

}

function handleClick() {
console.log('estou clicando')
}
 return (
    <div>
     <input placeholder="digite seu nome " onChange={handleInput}/>
  <button onClick={handleClick}>Clica aqui</button>
    </div>
 )
}

export default Events