import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const generateCardComponents = () => {
  const cardList = [];

  for (let card of CARD_DATA.cards) {
    cardList.push(<Card optionalText={ card.text } optionalEmoji={ card.emoji } />)
  }

  return cardList;
};

const Board = () => {
  const cardList = generateCardComponents();
  return (
    <div className="board">
      { cardList }
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
