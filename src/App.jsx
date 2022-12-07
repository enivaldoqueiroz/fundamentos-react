import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComponenteComParametro'

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="04 - Exemplo de Card">
            <Aleatorio min={1} max={60}/>
        </Card>
        
        <Card titulo="03 - Fragmento">
            <Fragmento />
        </Card>
        

        <Card titulo="02 - Situação do Aluno">
            <ComParametro
                titulo="Situação do Aluno"
                subtitulo="Pedro"
                nota={9.3} />
        </Card>

        <Card titulo="01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>
);
