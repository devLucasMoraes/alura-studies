import React from "react";
import Botao from "../Botao";
import styles from './Formulario.module.scss'

class Formulario extends React.Component {
    state = { 
        nomeDaTarefa: "" ,
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        console.log('state: ', this.state)
    }

    render(): React.ReactNode {
        return (
            <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input value={this.state.nomeDaTarefa}
                        onChange={evento => this.setState({...this.state, nomeDaTarefa: evento.target.value})} 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que você quer estudar" 
                        required
                    
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input value={this.state.tempo} 
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        type="time" 
                        name="tempo" 
                        id="tempo" 
                        min="00:00:00" 
                        max="01:30:00" 
                        step="1" 
                        required
                    />
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario