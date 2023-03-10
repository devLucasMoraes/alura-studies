import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import ITarefa from '../components/interfaces/ITarefa';
import Lista from '../components/Lista';
import styles from './App.module.scss'

function App() {

  const [tarefas, setTarefas] = useState<Array<ITarefa>>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();


  const cadastrarTarefa = (tarefa: ITarefa) => {
    setTarefas([...tarefas, tarefa])
  }

  const aoSelecionarTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  const finalizarTarefa = () => {
    if(selecionado) {
        setSelecionado(undefined)
        setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }
            return tarefa;
        }))
    }
}

  return (
    <div className={styles.AppStyle}>
      <Formulario novaTarefa={tarefa => cadastrarTarefa(tarefa)}/>
      <Cronometro finalizarTarefa={finalizarTarefa} selecionado={selecionado}/>
      <Lista tarefas={tarefas} aoSelecionarTarefa={aoSelecionarTarefa}/>
    </div>
  );
}

export default App;
