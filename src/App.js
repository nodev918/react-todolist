import './App.css';
import Todo from './components/Todo';


function App() {
  
  const initList = [
    "這是一則代辦清單"
  ]

  return (
    <>
      <Todo data={initList}/>
    </>
  );
}

export default App;
