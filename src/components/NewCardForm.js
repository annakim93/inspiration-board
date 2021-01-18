import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import './Card.css';

// // Optional smaller list of emojis:
// const EMOJI_LIST = [
//   "", 
//   "heart_eyes", 
//   "beer", 
//   "clap", 
//   "sparkling_heart", 
//   "heart_eyes_cat", 
//   "dog"
// ]

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: ''
  });

  const onInputChange = (event) => {
    const newFormFields = { ...formFields }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addCardCallback(formFields);
    setFormFields({
      text: '',
      emoji: ''
    });
  };

  return (
    <div>
      <span>Add a msg using the sticky below!</span>
      <div className='new-card-form new-card-form__bg-color'>
        <div className='card__content'>
          <form onSubmit={onFormSubmit} className='new-card-form__bg-color'>
            <textarea name='text' onChange={onInputChange} value={formFields.text} placeholder='Write your message here' />
            
            <select name='emoji' onChange={onInputChange} value={formFields.emoji} placeholder='Emoji'>
              <option value='' disabled selected>Emoji Selection</option>
              { emoji.names.map((emoji, index) => <option key={index}>{emoji}</option>) }
            </select>

            <input type='submit' value='Add Inspo!' className='new-card-form__form-button' />
          </form>
        </div>
      </div>
    </div>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;