import ITarefa from '../../interfaces/ITarefa'
import styles from '../Lista.module.scss'

interface ItemProps extends ITarefa {
    aoSelecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({aoSelecionarTarefa, id, completado, nome, selecionado, tempo} :ItemProps) {
    return (
        <li className={`${styles.item} ${ selecionado ? styles.itemSelecionado : ""}`} onClick={() => aoSelecionarTarefa({
            nome,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{nome}</h3>
            <span>{tempo}</span>
        </li>
    )
}