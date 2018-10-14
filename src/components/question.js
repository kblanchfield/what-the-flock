import React from 'react'

function Question(props) {
  return (
    <div className="question-title">
      <h2>A <span className="revealed-answer">{props.revealedAnswer}</span> <br /> of {props.bird}</h2>
    </div>
  )
}

export default Question
