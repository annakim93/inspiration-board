import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


const Board = (props) => {
  const BOARD_API_URL_BASE = props.url + 'boards/';
  const CARDS_API_URL_BASE = props.url + 'cards/';
  
  const [cardList, setCardList] = useState([]);
  const [alert, setAlert] = useState(null);

  const generateCardComponents = (apiResponse) => {
    const currentCardList = [];
  
    for (let card of apiResponse) {
      currentCardList.push(
        <Card 
          key={ card.id }  
          id={ card.id } 
          optionalText={ card.text } 
          optionalEmoji={ card.emoji } 
          deleteCardCallback={ deleteCard }
        />
      )
    }
  
    return currentCardList;
  };

  useEffect(() => {
    axios.get(BOARD_API_URL_BASE + props.boardName + '/cards')
      .then((response) => {
        const apiCardList = response.data.map(card => card.card);
        setCardList(apiCardList);
      })
      .catch((error) => {
        setAlert(error.message);
      });
  }, []);

  const deleteCard = (id) => {
    const newCardList = cardList.filter((card) => {
      return card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(CARDS_API_URL_BASE + id)
        .then((response) => {
          setAlert(`Card #${id} successfully deleted.`);
          setCardList(newCardList);
        })
        .catch((error) => {
          setAlert(`Failed to delete card #${id}.`);
        })
    }
  };

  return (
    <div>
      { alert 
        ? <div className='validation-errors-display'>
          <ul className='validation-errors-display__list'>
            { alert }
          </ul>
        </div> 
        : ''
      }
      <div className="board">
        { generateCardComponents(cardList) }
      </div>
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
