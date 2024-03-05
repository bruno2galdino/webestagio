import React from "react";

const QuestaoOne = () => {
    let indice = 13;
    const[totalK, setTotalK] = React.useState(0);

    const valorK = () => {
        for (let k = 0 ; k <= indice; k++) {
            setTotalK(k);      
        }
    }

    return (
        <div>
            <p>{`o valor da variável SOMA ${totalK}`}</p>
            <button onClick={valorK}>Somar!</button>
        </div>
    )
}

export default QuestaoOne