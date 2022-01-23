import logo from './logo.svg';
import './App.css';
import {ToDoList} from './components/ToDoList/ToDoList.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
