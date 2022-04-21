import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos';
import TodoInput from './components/Todos/TodoInput';
import LayoutComponent from './components/layoutComponent/layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         TODOS
        </p>
        <Todos />
        <TodoInput />
      </header>
    </div>
  );
}

export default App;
