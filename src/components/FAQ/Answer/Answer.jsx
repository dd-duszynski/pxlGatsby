import React, { Component } from "react"
import styles from "./Answer.module.scss"

const AnswerContent = ({ which }) => (
   <>{which && <p className={styles.answer_content}>{which[1]}</p>}</>
)

class Answer extends Component {
   state = {
      results: null,
   }

   toogleResults = () => {
      this.props.onToggle(this.props.question)
      this.setState({ results: [this.props.question, this.props.answer] })
   }

   renderResults = () => {
      return <AnswerContent which={this.state.results} />
   }

   render() {
      const arrowCSS = this.props.expanded ? styles.arrowRotate : styles.arrow
      return (
         <>
            <h3
               onClick={() => this.toogleResults()}
               className={styles.answer_title}
            >
               {this.props.question}
               <span className={arrowCSS} />
            </h3>
            {this.props.expanded === true && this.renderResults()}
         </>
      )
   }
}

export default Answer
