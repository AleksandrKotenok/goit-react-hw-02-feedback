import React,{ Component } from 'react';
import PropTypes from 'prop-types'
import {Statistics} from '../Statistics/Statistics'
class Feedback extends Component {
   
   static propTypes = {
      good: PropTypes.number,
      neutral:PropTypes.number,
      bad:PropTypes.string
   }
   state = {
      good: 0,
      neutral: 0,
      bad: 0
   }
   
   goodIncrement = () => this.setState(prevState => ({ good: prevState.good + 1 }))
   neutralIncrement = () => this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
   badIncrement = () => this.setState(prevState => ({ bad: prevState.bad + 1 })) 
   countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad 
   countPositiveFeedbackPercentage = () => Math.round((this.state.good*100)/this.countTotalFeedback())
   render() {
      
      return (
         <div>
            <h1>Please leave feedback</h1>
            <button type="button" onClick={this.goodIncrement}>Good</button>
            <button type="button" onClick={this.neutralIncrement}>Neutral</button>
            <button type="button" onClick={this.badIncrement}>Bad</button>
            <Statistics
               good={this.state.good}
               neutral={ this.state.neutral}
               bad={ this.state.bad}
               total={this.countTotalFeedback() }
               positivePercentage={this.countPositiveFeedbackPercentage() }
            />
            {/* {this.countTotalFeedback() > 0 ? (
               <div>
                  <p>Good:{this.state.good}</p>
                  <p>Neutral:{this.state.neutral}</p>
                  <p>Bad:{this.state.bad}</p>
                  <p>Total:{this.countTotalFeedback()}</p>
                  <p>Positive feedback:{this.countPositiveFeedbackPercentage()}%</p>
               </div>):(<p>none</p>)} */}
         </div>
      )
   }
}
export default Feedback