import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btn_cont}>
      {options.map((option, index) => {
        return (
          <button type="button" key={index} onClick={onLeaveFeedback}>
            {option}
          </button>
        );
      })}
    </div>
  );
};
