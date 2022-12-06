import React from "react"

export default props =>{
    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    
    return(
        <div>
            <h1>Valor Aleatório</h1>
            <p><strong>Valor Minimo:</strong> { props.min } </p>
            <p><strong>Valor Maximo:</strong> { props.max } </p>
            <p><strong>Valor Escolhido:</strong> { aleatorio } </p>
        </div>
    )
}