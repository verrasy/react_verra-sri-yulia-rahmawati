import React from 'react';
import ToDoApp from './component/ToDoApp';
import './component/Style.css';
import Items from './component/Items';

function App() {
  return (
    <div className='App'>
    <ToDoApp/>
    <Items/>
    </div>
  );
}

export default App;
