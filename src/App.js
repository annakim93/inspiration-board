import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  return (
    <section>
      {/* <header className="header">
        <h1 className="header__h1">
          <span>inspo </span>
          <span className='header__text--stroke'>board</span>
        </h1>
      </header> */}
      <Board
        url="https://inspiration-board.herokuapp.com/"
        boardName='anna-kim'
      />
    </section>
  );
};

export default App;
