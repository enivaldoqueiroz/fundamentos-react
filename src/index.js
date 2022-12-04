import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComponenteComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do Aluno"
            subtitulo="Pedro" 
            nota={9.3}/>
        <Fragmento/>
    </div>, 
    document.getElementById('root')
)