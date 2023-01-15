import ITarefa from '../../interfaces/ITarefa'
import styles from './Item.module.scss'

interface ItemProps extends ITarefa {
    aoSelecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({aoSelecionarTarefa, id, completado, nome, selecionado, tempo} :ItemProps) {
    return (
        <li className={`${styles.item} ${ selecionado ? styles.itemSelecionado : ""} ${completado ? styles.itemCompletado : ""}`} 
            onClick={() => !completado && aoSelecionarTarefa({
            nome,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{nome}</h3>
            <span>{tempo}</span>
            {completado && <span className={styles.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}