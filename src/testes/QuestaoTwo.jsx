import React from 'react'

const QuestaoTwo = () => {

    const [numero, setNumero] = React.useState();
    const [fibonacci, setFibonacci] = React.useState(3);

    // Dada a Logica que
    // “Um número é Fibonacci se e apenas se uma ou ambas 
    // as expressões 5*n2 + 4 ou 5*n2 – 4 retornarem um quadrado perfeito.”

    const checaQuadrado = (x) => {
        const r = Math.floor(Math.sqrt(x));

        return r * r === x;
    }

    const EFibonacci = (y) => {
        return checaQuadrado(5 * y * y + 4) || checaQuadrado(5 * y * y - 4);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFibonacci(EFibonacci(numero))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="numero">Digite um Numero: </label>
                <input
                    type="number"
                    name='numero'
                    value={numero}
                    placeholder='Digite um valor'
                    onChange={(e) => setNumero(e.target.value)} />
                <input type="submit" value='Enviar' />
            </form>
            <p>{ fibonacci === 3 ? 'Aguardando um valor' : fibonacci ? 'O numero é Fibonnaci':'O numero não é Fibonnaci'}</p>
        </div>
    )
}

export default QuestaoTwo