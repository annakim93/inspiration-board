import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = () => {
  return (
    <div className="card">
      Card
    </div>
  )
}

Card.propTypes = {
  optionalText: PropTypes.string,
  optionalEmoji: PropTypes.string
};

export default Card;
