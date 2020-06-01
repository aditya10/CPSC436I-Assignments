import React from 'react';
import '../App.css';
import AddMessage from './AddMessage';
import MessageBoard from './MessageBoard';

function App() {
  return (
    <div className="mainBody">
       <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&family=Sarala&display=swap" rel="stylesheet"/>
      <nav>
        <span className="title">
            Message Board
        </span>
      </nav>
      <AddMessage/>
      <MessageBoard/>
    </div>
  );
}

export default App;
