import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`;
    // const [valor, setValor] = useState('') 
    const aoDigitado = (evento) => {
        // setValor(evento.target.value);
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMod} />
        </div>
    )
}

export default CampoTexto