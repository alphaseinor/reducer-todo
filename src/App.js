import React from 'react'
import Todos from './components/Todos.js'
import TodoAdd from './components/TodoAdd'

function App() {
  return (
    <>
      <header>Todo List</header>
      <main>
        <TodoAdd />
        <Todos />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
