import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">
          { props.optionalText ? props.optionalText : null }
        </p>
        <p className="card__content-emoji">
          { props.optionalEmoji ? emoji.getUnicode(props.optionalEmoji) : null }
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  optionalText: PropTypes.string,
  optionalEmoji: PropTypes.string
};

export default Card;
