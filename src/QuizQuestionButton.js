import React, { Component } from 'react'
//import QuizQuestion from './QuizQuestion'

class QuizQuestionButton extends Component {
    
    handleClick = () => {
        this.props.clickHandler(this.props.button_text);
    }

    render(props) {
        return (
            <li>
                <button onClick={this.handleClick()}>{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton;