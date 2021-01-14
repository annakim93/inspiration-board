import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const generateCardComponents = (apiResponse) => {
  const cardList = [];

  for (let card of apiResponse) {
    cardList.push(<Card key={card.card.id} optionalText={ card.card.text } optionalEmoji={ card.card.emoji } />)
  }

  return cardList;
};

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  // const cardList = generateCardComponents();

  useEffect(() => {
    axios.get(props.url + props.boardName + '/cards')
      .then((response) => {
        const apiCardList = generateCardComponents(response.data);
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  // useEffect(() => {
    
  // });

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
