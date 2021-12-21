import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = vote =>
    this.setState(prevState => ({ [vote]: prevState[vote] + 1 }));
  countTotalFeedback = () =>
    // this.state.good + this.state.neutral + this.state.bad;
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const options = Object.keys(this.state);
    const statistics = Object.entries(this.state);
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.increment} />
        </Section>
        <Section title="Statistics">
          <Statistics
            // good={this.state.good}
            // neutral={this.state.neutral}
            // bad={this.state.bad}
            statistics={statistics}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Fragment>
    );
  }
}
export default App;
