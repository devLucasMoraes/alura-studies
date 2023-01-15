import ITarefa from '../interfaces/ITarefa'
import Item from './Item'
import styles from './Lista.module.scss'



export default function Lista({tarefas} :{ tarefas: Array<ITarefa> }) {
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item nomeDaTarefa={tarefa.nome} tempoDaTarefa={tarefa.tempo} key={tarefa.nome} />
                ))}
            </ul>
        </aside>

    )
}