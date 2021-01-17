import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import './Card.css';

const EMOJI_LIST = [
  "", 
  "heart_eyes", 
  "beer", 
  "clap", 
  "sparkling_heart", 
  "heart_eyes_cat", 
  "dog"
]

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
            
            <select name='emoji' onChange={onInputChange} value={formFields.emoji}>
              { EMOJI_LIST.map((emoji, index) => <option key={index}>{emoji}</option>) }
            </select>

            <input type='submit' value='Add Inspo!' className='card__delete' />
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