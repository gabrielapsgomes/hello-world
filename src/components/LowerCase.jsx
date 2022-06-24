const LowerCase = (props) => {
    const textoInserido = props.texto
    const textoTransformado = textoInserido.toLowerCase()
    return(
        <p>{textoTransformado}</p>
    )
}

export default LowerCase

//<LowerCase texto='TEXTOMAIUSCULO'/>

//No navegador -> textomaiusculo