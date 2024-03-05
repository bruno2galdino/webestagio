import React from 'react'

const QuestaoFive = () => {
    const [entrada, setEntrada] = React.useState('');
    const [saida, setSaida] = React.useState('');

    const handleChange = (event) => {
        setEntrada(event.target.value);
    };

    const reverseString = () => {
        let invertido = '';
        for (let i = entrada.length - 1; i >= 0; i--) {
            invertido += entrada[i];
        }
        setSaida(invertido);
    };

    return (
        <div>
            <input type="text" value={entrada} onChange={handleChange} />
            <button onClick={reverseString}>Inverter</button>
            <p>Caracteres Invertidos: {saida}</p>
        </div>
    )
}

export default QuestaoFive