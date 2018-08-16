import React, { Component } from 'react' // Import React library
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json') // load data (json)

class Quiz extends Component {
	constructor (props) {
		super(props)
		this.state = { quiz_position: 1}
	}
	render() {
		return(
			<div>
				<QuizQuestion quiz_question = { quizData.quiz_questions[ this.state_quiz_position = 1 ]} />
			</div>
		)
	}
}

export default Quiz // export Quiz