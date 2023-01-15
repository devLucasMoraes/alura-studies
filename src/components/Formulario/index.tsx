import React, { useState } from "react";
import Botao from "../Botao";
import ITarefa from "../interfaces/ITarefa";
import styles from './Formulario.module.scss';
import { v4 as uuidv4} from 'uuid';

interface FormularioProps {
    novaTarefa: (tarefa: ITarefa) => void
}

export default function Formulario({novaTarefa} :FormularioProps){

    const [nomeDaTarefa, setNomeDaTarefa] = useState("")
    const [tempoDaTarefa, setTempoDaTarefa] = useState("00:00:00")

    const aoAdicionar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        novaTarefa({
            tempo: tempoDaTarefa,
            nome: nomeDaTarefa,
            selecionado: false,
            completado: false,
            id: uuidv4()
        })
        setNomeDaTarefa('')
        setTempoDaTarefa('00:00:00')
    }

    return (
        <form className={styles.novaTarefa} onSubmit={aoAdicionar}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input value={nomeDaTarefa}
                    onChange={evento => setNomeDaTarefa(evento.target.value)} 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você quer estudar" 
                    required
                
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input value={tempoDaTarefa} 
                    onChange={evento => setTempoDaTarefa(evento.target.value)}
                    type="time" 
                    name="tempo" 
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00" 
                    step="1" 
                    required
                />
            </div>
            <Botao type='submit'>Adicionar</Botao>
        </form>
    )
}