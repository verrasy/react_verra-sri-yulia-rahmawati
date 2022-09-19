import React from 'react';
import './Style.css';
import Items from './Items.js';


function ToDoApp() {
    const contents = [ 
        {
          id: 1,
          title: "Membuat Komponen",
          completed: true,
        },
        {
          id: 2,
          title: "Unit Testing",
          completed: false,
        },
        {
          id: 3,
          title: "Setup Development Environment",
          completed: true,
        },
        {
          id: 4,
          title: "Deploy ke server",
          completed: false,
        },
      ];
      
      return (
        <div className="ToDoApp">
            <h2>To Do App</h2><hr/>
            <Items contents={contents}/>
        </div>
      );
}

export default ToDoApp;
