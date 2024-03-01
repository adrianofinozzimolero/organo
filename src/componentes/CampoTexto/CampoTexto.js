import './CampoTexto.css';

const CampoTexto = (props) => {

    // exemplo de interpolação de "strings". Notar que se usa o sinal de crase (não é aspas simples)
    // aqui se adiciona três pontos após o conteúdo do "placeholder"
    const placeholderModificada = `${props.placeholder}...`;

    // let valor = 'Guilherme Silveia';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto" >
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
    
}

export default CampoTexto;
