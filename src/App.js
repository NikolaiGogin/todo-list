import React from 'react';
import './styles/App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className='todo-list_title'>TODOS</h1>
      <TodoList />
    </div>
  );
}

export default App;
