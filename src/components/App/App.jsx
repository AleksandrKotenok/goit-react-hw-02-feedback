import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.string,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = vote =>
    this.setState(prevState => ({ [vote]: prevState[vote] + 1 }));
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.increment}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
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
