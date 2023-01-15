import ITarefa from '../interfaces/ITarefa'
import Item from './Item'
import styles from './Lista.module.scss'

interface ListaProps {
    tarefas: Array<ITarefa>
    aoSelecionarTarefa: (tarefaSelecionada: ITarefa) => void

}

export default function Lista({ tarefas, aoSelecionarTarefa}: ListaProps) {
    return (
        <aside className={styles.listaTarefas} >
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item
                        aoSelecionarTarefa={aoSelecionarTarefa} 
                        key={tarefa.id}
                        {...tarefa}
                    />
                        
                ))}
            </ul>
        </aside>

    )
}