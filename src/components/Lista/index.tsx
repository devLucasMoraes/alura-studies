import Item from './Item'
import styles from './Lista.module.scss'

export default function Lista() {
    const tarefas = [
        {
            nome: 'React',
            tempo: '02:00:00' 
        },
        {
            nome: 'Javascript',
            tempo: '01:00:00'
        }
    ]
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item nomeDaTarefa={tarefa.nome} tempo={tarefa.tempo} key={tarefa.nome} />
                ))}
            </ul>
        </aside>

    )
}