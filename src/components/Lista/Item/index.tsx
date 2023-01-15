import styles from '../Lista.module.scss'

interface ItemProps {
    nomeDaTarefa: string
    tempo: string
}

export default function Item({nomeDaTarefa, tempo} :ItemProps) {
    return (
        <li className={styles.item}>
            <h3>{nomeDaTarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}