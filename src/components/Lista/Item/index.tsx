import styles from '../Lista.module.scss'

interface ItemProps {
    nomeDaTarefa: string
    tempoDaTarefa: string
}

export default function Item({nomeDaTarefa, tempoDaTarefa} :ItemProps) {
    return (
        <li className={styles.item}>
            <h3>{nomeDaTarefa}</h3>
            <span>{tempoDaTarefa}</span>
        </li>
    )
}