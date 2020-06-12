import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {

  handleClick = (buttonText) => {
    if(buttonText === this.props.quiz_question.answer) {
      // console.log(buttonText);
      // console.log(this.props.quiz_question.answer)
      this.props.showNextQuestionHandler();
    }
  }

  render(props) {
    return (
      <div>
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
              {
                this.props.quiz_question.answer_options.map((answer_option, index) => {
                  // console.log(answer_option, index);
                  return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick}/>
                })
              }
              
               
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
