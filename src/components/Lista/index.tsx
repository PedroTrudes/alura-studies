import React, {useState} from 'react';
import style from './Lista.module.scss';
import Botao from '../Botao';
import Item from './Item'

function Lista(){
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JS',
        tempo: '01:00:00'
    }, {
        tarefa: 'TS',
        tempo: '00:30:00'
    }]);
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() =>{
                setTarefas([...tarefas, {tarefa: "estudar estado", tempo: "01:00:00"}]) 
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                  <Item 
                  key={index}
                  tarefa={item.tarefa}
                  tempo={item.tempo}
                  />
                ))}
            </ul>
        </aside>
    )
    //Key={index} serve para pegar o ID de um JSON
    //Dentro de Item porem ele pode pegar dados nao tipados e dar erro{...item}
}

export default Lista;