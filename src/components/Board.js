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
    const singleCard = card.card
    cardList.push(<Card key={ singleCard.id } optionalText={ singleCard.text } optionalEmoji={ singleCard.emoji } />)
  }

  return cardList;
};

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(props.url + 'boards/' + props.boardName + '/cards')
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

  const deleteCard = (id) => {
    const newCardList = cardList.filter((card) => {
      return card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(props.url + 'cards' + id)
        .then((response) => {
          setErrorMessage(`Card #${id} successfully deleted.`);
        })
        .catch((error) => {
          setErrorMessage(`Failed to delete card #${id}.`);
        })
      setCardList(newCardList);
    }
  };

  return (
    <div className="board">
      { errorMessage 
        ? <div className='validation-errors-display'>
          <ul className='validation-errors-display__list'>
            { errorMessage }
          </ul>
        </div> 
        : ''
      }
      { cardList }
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
