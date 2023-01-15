import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import ITarefa from '../components/interfaces/ITarefa';
import Lista from '../components/Lista';
import styles from './App.module.scss'

function App() {

  const [tarefas, setTarefas] = useState<Array<ITarefa>>([])

  const cadastrarTarefa = (tarefa: ITarefa) => {
    setTarefas([...tarefas, tarefa])
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario novaTarefa={tarefa => cadastrarTarefa(tarefa)}/>
      <Cronometro />
      <Lista tarefas={tarefas}/>
    </div>
  );
}

export default App;
