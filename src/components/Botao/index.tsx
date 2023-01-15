import React, { ReactElement } from "react";
import styles from './Botao.module.scss'

interface BotaoProps {
    type?: "button" | "submit" | "reset" | undefined
    children: ReactElement | string
}

export default function Botao({type = "button", children} :BotaoProps) {
    return (
        <button type={type} className={styles.botao}>
            {children}
        </button>
    )
}