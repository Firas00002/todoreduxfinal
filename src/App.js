
import './App.css';
import Todo from './components/Todo';
import Addtodo from './components/Addtodo';

function App() {
  
  return (
    <div className="App">
      <Addtodo />
      <br/>
      <Todo />
    </div>
  );
}

export default App;
