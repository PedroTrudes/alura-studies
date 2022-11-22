import style from '../Lista.module.scss'

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}){
    return(
        <li className={style.item}>
          <h2>{tarefa}</h2>
          <span>{tempo}</span>
        </li>    
    )
}