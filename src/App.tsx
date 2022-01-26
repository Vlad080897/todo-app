import React from 'react';
import Todos from './components/Todos';

function App() {
  return (
    <div className='todo-container'>
      <div className='todo-wrapper'>
        <span>What's your plans for this day?</span>
        <Todos />
      </div>
    </div>
  );
}

export default App;
