import React, { ReactElement } from "react";
import styles from './Botao.module.scss'

interface BotaoProps {
    type?: "button" | "submit" | "reset" | undefined
    children: ReactElement | string
    onClick?: () => void
}

export default function Botao({type = "button", children, onClick} :BotaoProps) {
    return (
        <button onClick={onClick} type={type} className={styles.botao}>
            {children}
        </button>
    )
}