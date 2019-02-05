import React from "react"
import PropTypes from "prop-types"
import "./navigation.scss"

const Navigation = ({ onPreviousQuestion, onNextQuestion }) => {
  return (
    <div className="navigation">
    <h4 className="previous-question" onClick={onPreviousQuestion}><i className="fas fa-angle-left"></i> Back</h4>
    <h4 className="next-question" onClick={onNextQuestion}>Next <i className="fas fa-angle-right"></i></h4>
    </div>
  )
}

Navigation.propTypes = {
   onPreviousQuestion: PropTypes.func.isRequired,
   onNextQuestion: PropTypes.func.isRequired
 }

export default Navigation
