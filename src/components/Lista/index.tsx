import React from 'react';
import './style.scss';

function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JS',
        tempo: '01:00:00'
    }, {
        tarefa: 'TS',
        tempo: '00:30:00'
    }]
    return(
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    //Key={index} serve para pegar o ID de um JSON
                    <li key={index} className="item">
                        <h2>{item.tarefa}</h2>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;