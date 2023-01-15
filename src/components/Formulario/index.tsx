import React from "react";
import Botao from "../Botao";
import styles from './Formulario.module.scss'

class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form className={styles.novaTarefa}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" name="tempo" id="tempo" min="00:00:00" max="01:30:00" step="1" required/>
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario