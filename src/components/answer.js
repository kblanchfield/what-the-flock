import React from 'react'

function Answer(props) {

  return (
      <div className="answer-option">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          id={props.content}
          value={props.content}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.content}>
          {props.content}
        </label>
      </div>
  )
}

export default Answer
