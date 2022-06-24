const UpperCase = (props) => {
    const textoInserido = props.texto
    const textoTransformado = textoInserido.toUpperCase()
    return(
        <p>{textoTransformado}</p>
    )
}

export default UpperCase

//<UpperCase texto='textomaiusculo'/>

//No navegador -> TEXTOMAIUSCULO