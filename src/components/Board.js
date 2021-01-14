import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const generateCardComponents = (apiResponse) => {
    const currentCardList = [];
  
    for (let card of apiResponse) {
      currentCardList.push(<Card 
        key={ card.id }  
        id={ card.id } 
        optionalText={ card.text } 
        optionalEmoji={ card.emoji } 
        deleteCardCallback={ deleteCard }
      />)
    }
  
    return currentCardList;
  };

  useEffect(() => {
    axios.get(props.url + 'boards/' + props.boardName + '/cards')
      .then((response) => {
        const apiCardList = response.data.map(card => card.card);
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const deleteCard = (id) => {
    console.log(cardList);
    const newCardList = cardList.filter((card) => {
      return card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(props.url + 'cards/' + id)
        .then((response) => {
          setErrorMessage(`Card #${id} successfully deleted.`);
          setCardList(newCardList);
        })
        .catch((error) => {
          setErrorMessage(`Failed to delete card #${id}.`);
        })
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
      { generateCardComponents(cardList) }
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
