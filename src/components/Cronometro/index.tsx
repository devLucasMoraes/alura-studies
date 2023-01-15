import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from './Cronometro.module.scss'
import ITarefa from "../interfaces/ITarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../common/utils/time";

interface CronometroProps {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: CronometroProps) {

    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
           setTempo(tempoParaSegundos(selecionado.tempo)) 
        }
    }, [selecionado])

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie para iniciar o cronômetro</p>
            tempo: {tempo}
            <div className={styles.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Começar!</Botao>
        </div>
    )
}