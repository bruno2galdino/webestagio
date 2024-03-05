import './App.css'
import QuestaoFive from './testes/QuestaoFive'
import QuestaoFour from './testes/QuestaoFour'
import QuestaoOne from './testes/QuestaoOne'
import QuestaoThree from './testes/QuestaoThree'
import QuestaoTwo from './testes/QuestaoTwo'

function App() {


  return (
    <div>
      <h2>Questão N°1</h2>
      <QuestaoOne />

      <h2>Questão N°2</h2>
      <QuestaoTwo />

      <h2>Questão N°3</h2>
      <QuestaoThree />

      <h2>Questão N°4</h2>
      <QuestaoFour />

      <h2>Questão N°5</h2>
      <QuestaoFive />
    </div>

  )
}

export default App
